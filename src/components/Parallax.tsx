'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
    children: ReactNode;
    speed?: number; // 0.1 = slow, 0.5 = medium, 1 = normal scroll
    className?: string;
    backgroundImage?: string;
    overlay?: boolean;
    overlayColor?: string;
}

export function ParallaxSection({
    children,
    speed = 0.5,
    className = '',
    backgroundImage,
    overlay = false,
    overlayColor = 'rgba(0, 0, 0, 0.4)',
}: ParallaxSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !backgroundRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const scrolled = window.scrollY;
            const sectionTop = sectionRef.current.offsetTop;
            const offset = (scrolled - sectionTop) * speed;

            // Only apply parallax when section is in view
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                backgroundRef.current.style.transform = `translateY(${offset}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
            {backgroundImage && (
                <>
                    <div
                        ref={backgroundRef}
                        className="absolute inset-0 -top-20 -bottom-20 bg-cover bg-center will-change-transform"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                    {overlay && (
                        <div
                            className="absolute inset-0"
                            style={{ backgroundColor: overlayColor }}
                        />
                    )}
                </>
            )}
            <div className="relative z-10">{children}</div>
        </div>
    );
}

interface ParallaxElementProps {
    children: ReactNode;
    speed?: number;
    direction?: 'up' | 'down';
    className?: string;
}

export function ParallaxElement({
    children,
    speed = 0.3,
    direction = 'up',
    className = '',
}: ParallaxElementProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current) return;

            const rect = elementRef.current.getBoundingClientRect();
            const scrolled = window.scrollY;
            const elementTop = elementRef.current.offsetTop;
            const multiplier = direction === 'up' ? -1 : 1;
            const offset = (scrolled - elementTop + window.innerHeight) * speed * multiplier;

            // Only apply parallax when element is in view
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                elementRef.current.style.transform = `translateY(${offset}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed, direction]);

    return (
        <div ref={elementRef} className={`will-change-transform ${className}`}>
            {children}
        </div>
    );
}

// Fade-in on scroll effect with optional parallax
interface FadeInOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    parallax?: boolean;
    parallaxSpeed?: number;
}

export function FadeInOnScroll({
    children,
    className = '',
    delay = 0,
    parallax = false,
    parallaxSpeed = 0.15
}: FadeInOnScrollProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    useEffect(() => {
        if (!parallax || !isVisible) return;

        const handleScroll = () => {
            if (!elementRef.current) return;

            const rect = elementRef.current.getBoundingClientRect();
            const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;

            // Only apply parallax when element is in view
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setOffset(scrollProgress * 50 * parallaxSpeed);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [parallax, parallaxSpeed, isVisible]);

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${className}`}
            style={parallax && isVisible ? { transform: `translateY(-${offset}px)` } : undefined}
        >
            {children}
        </div>
    );
}


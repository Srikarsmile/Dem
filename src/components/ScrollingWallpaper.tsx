'use client';

import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';

interface ScrollingWallpaperProps {
    children: ReactNode;
    imagePaths?: string[]; // Multiple images for crossfade
    imagePath?: string; // Single image (backward compatible)
    speed?: number; // parallax speed multiplier (0.3 = slow, 0.7 = fast)
    overlay?: boolean;
    overlayOpacity?: number; // 0-1
    className?: string;
    imageAlt?: string;
    objectPosition?: string; // CSS object-position value (e.g., "center center", "center top")
    transitionDuration?: number; // Seconds between image changes
    kenBurnsEffect?: boolean; // Enable subtle zoom animation
}

export function ScrollingWallpaper({
    children,
    imagePaths,
    imagePath,
    speed = 0.5,
    overlay = true,
    overlayOpacity = 0.7,
    className = '',
    imageAlt = 'Background wallpaper',
    objectPosition = 'center center',
    transitionDuration = 6,
    kenBurnsEffect = true,
}: ScrollingWallpaperProps) {
    const [scrollY, setScrollY] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Support both single image and multiple images
    const images = imagePaths || (imagePath ? [imagePath] : []);
    const hasMultipleImages = images.length > 1;

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Auto-rotate images with smooth transitions
    useEffect(() => {
        if (!hasMultipleImages) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, transitionDuration * 1000);

        return () => clearInterval(interval);
    }, [hasMultipleImages, images.length, transitionDuration]);

    const parallaxOffset = scrollY * speed;

    return (
        <section className={`relative overflow-hidden ${className}`}>
            {/* Background Images with Crossfade */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    transform: `translateY(${parallaxOffset}px)`,
                    willChange: 'transform',
                }}
            >
                {images.map((imgPath, index) => (
                    <div
                        key={imgPath}
                        className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
                        style={{
                            opacity: currentImageIndex === index ? 1 : 0,
                            zIndex: currentImageIndex === index ? 1 : 0,
                        }}
                    >
                        <Image
                            src={imgPath}
                            alt={imageAlt}
                            fill
                            sizes="100vw"
                            className={`object-cover ${kenBurnsEffect ? 'animate-ken-burns' : ''}`}
                            style={{ objectPosition }}
                            priority={index === 0}
                            quality={90}
                        />
                    </div>
                ))}
            </div>

            {/* Modern Gradient Overlay (bottom to top) */}
            {overlay && (
                <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"
                    style={{ opacity: overlayOpacity }}
                />
            )}

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </section>
    );
}

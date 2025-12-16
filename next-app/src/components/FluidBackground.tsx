'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function FluidBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const [isSupported, setIsSupported] = useState(true);

    useEffect(() => {
        if (pathname !== '/' || !containerRef.current) return;

        let renderer: any = null;
        let isMounted = true;

        const init = async () => {
            try {
                // Strict environment check
                if (typeof window === 'undefined' || typeof document === 'undefined') {
                    setIsSupported(false);
                    return;
                }

                // Test WebGPU availability FIRST
                const hasWebGPU = !!(navigator as any).gpu;

                if (!hasWebGPU) {
                    console.warn("FluidBackground: WebGPU not supported. Skipping 3D effects.");
                    setIsSupported(false);
                    return;
                }

                // ONLY import THREE after confirming WebGPU support
                // This prevents the import from crashing when probing for WebGL
                const THREE = await import('three');

                // Dynamic import for WebGPU modules - wrapped in try-catch
                let WebGPURenderer: any;
                let MeshBasicNodeMaterial: any;
                let tslFunctions: any;

                try {
                    const webgpuModule = await import('three/webgpu');
                    WebGPURenderer = webgpuModule.WebGPURenderer;
                    MeshBasicNodeMaterial = webgpuModule.MeshBasicNodeMaterial;

                    const tslModule = await import('three/tsl');
                    tslFunctions = tslModule;
                } catch (importError) {
                    console.warn("FluidBackground: Failed to import WebGPU modules.", importError);
                    setIsSupported(false);
                    return;
                }

                if (!isMounted) return;

                const { color, uv, time, mx_noise_float, mix, smoothstep, Fn, uniform } = tslFunctions;

                const width = window.innerWidth;
                const height = window.innerHeight;

                // Scene
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
                camera.position.z = 1;

                // Renderer with explicit WebGPU-only mode
                try {
                    renderer = new WebGPURenderer({
                        alpha: true,
                        antialias: false,
                        forceWebGL: false  // Explicitly disable WebGL fallback
                    });

                    if (!renderer) {
                        throw new Error("Renderer creation returned null/undefined");
                    }

                    // Initialize WebGPU adapter
                    await renderer.init();
                } catch (rendererError) {
                    console.warn("FluidBackground: Renderer failed to initialize.", rendererError);
                    setIsSupported(false);
                    return;
                }

                if (!isMounted) return;

                try {
                    renderer.setSize(width, height);
                    renderer.setPixelRatio(1);
                    if (containerRef.current) {
                        containerRef.current.appendChild(renderer.domElement);
                    }
                } catch (domError) {
                    console.warn("FluidBackground: Failed to attach renderer to DOM.", domError);
                    setIsSupported(false);
                    return;
                }

                // Mouse uniform
                const uMouse = uniform(new THREE.Vector2(0.5, 0.5));

                // Shader Logic
                const fluidShader = Fn(() => {
                    const t = time.mul(0.2);
                    const uvCoords = uv();
                    const mouseEffect = uMouse.mul(0.5);

                    const n1 = mx_noise_float(uvCoords.mul(3).add(t.mul(0.5)));
                    const n2 = mx_noise_float(uvCoords.mul(6).sub(t.mul(0.2)).add(mouseEffect));
                    const noise = n1.add(n2).mul(0.5);

                    // Light Theme Colors
                    const teal = color('#359CA6');
                    const purple = color('#7986CB');
                    const coral = color('#E57373');
                    const white = color('#ffffff');

                    const ink = mix(teal, purple, smoothstep(0.3, 0.7, noise));
                    const activeInk = mix(ink, coral, smoothstep(0.6, 0.8, n2));
                    const finalColor = mix(white, activeInk, smoothstep(0.4, 0.6, noise.mul(n2).add(0.2)));

                    return finalColor;
                });

                // Plane
                const material = new MeshBasicNodeMaterial();
                material.colorNode = fluidShader();

                const geometry = new THREE.PlaneGeometry(2, 2);
                const plane = new THREE.Mesh(geometry, material);

                // Resize Plane Logic
                const resizePlane = () => {
                    const distance = camera.position.z;
                    const vFov = camera.fov * Math.PI / 180;
                    const h = 2 * Math.tan(vFov / 2) * distance;
                    const w = h * camera.aspect;
                    plane.scale.set(w / 2, h / 2, 1);
                };

                resizePlane();
                scene.add(plane);

                // Event handlers
                const handleResize = () => {
                    if (!renderer) return;
                    const w = window.innerWidth;
                    const h = window.innerHeight;
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    try {
                        renderer.setSize(w, h);
                        resizePlane();
                    } catch (e) {
                        console.warn("Resize failed", e);
                    }
                };

                const handleMouseMove = (e: MouseEvent) => {
                    const x = e.clientX / window.innerWidth;
                    const y = 1.0 - e.clientY / window.innerHeight;
                    uMouse.value.set(x, y);
                };

                window.addEventListener('resize', handleResize);
                window.addEventListener('mousemove', handleMouseMove);

                // Animation Loop
                renderer.setAnimationLoop(() => {
                    if (!isMounted || !renderer) return;
                    try {
                        renderer.render(scene, camera);
                    } catch (err) {
                        console.error("Render loop error - stopping loop", err);
                        renderer.setAnimationLoop(null);
                    }
                });

            } catch (e) {
                console.warn('FluidBackground: Fatal initialization error', e);
                setIsSupported(false);
            }
        };

        // Delay init to ensure DOM is ready
        const timer = setTimeout(() => {
            init().catch(e => {
                console.warn("Async init failed", e);
                setIsSupported(false);
            });
        }, 100);

        return () => {
            isMounted = false;
            clearTimeout(timer);
            window.removeEventListener('resize', () => { }); // Remove specific listener, not generic one
            window.removeEventListener('mousemove', () => { }); // Remove specific listener

            // Safe disposal
            try {
                if (renderer) {
                    renderer.setAnimationLoop(null);
                    if (renderer.dispose) renderer.dispose();
                    if (renderer.domElement && containerRef.current && containerRef.current.contains(renderer.domElement)) {
                        containerRef.current.removeChild(renderer.domElement);
                    }
                }
            } catch (cleanupError) {
                console.warn("Cleanup error", cleanupError);
            }
        };
    }, [pathname]);

    if (pathname !== '/') return null;

    // Render a simple gradient fallback if WebGPU is not supported
    if (!isSupported) {
        return (
            <div
                className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60"
                style={{
                    background: 'linear-gradient(135deg, rgba(53, 156, 166, 0.15) 0%, rgba(121, 134, 203, 0.15) 50%, rgba(229, 115, 115, 0.1) 100%)'
                }}
            />
        );
    }

    return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60" />;
}

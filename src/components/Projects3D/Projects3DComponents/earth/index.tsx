import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { motion } from 'framer-motion-3d';

const Earth: React.FC = () => {
    const sceneRef = useRef<HTMLCanvasElement>(null);
    const [isClient, setIsClient] = useState<boolean>(false);
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
            const handleScroll = () => {
                const progress = window.scrollY / (document.body.offsetHeight - window.innerHeight);
                setScrollY(progress);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/assets/color.webp',
        '/assets/normal.webp',
        '/assets/occlusion.webp'
    ])

    // Calculate rotation based on scrollY
    const rotationY = scrollY * Math.PI * 2;

    return (
        <Canvas ref={sceneRef}>
            {isClient && (
                <>
                    <ambientLight intensity={0.1} />
                    <directionalLight intensity={4} position={[1, 0, -0.15]} />
                    <motion.mesh scale={2.5} rotation-y={rotationY}>
                        <sphereGeometry args={[1, 64, 64]} />
                        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
                    </motion.mesh>
                </>
            )}
        </Canvas>
    );
};

export default Earth;

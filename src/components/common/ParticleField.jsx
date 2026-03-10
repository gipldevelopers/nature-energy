import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Motion = motion;

export function ParticleField() {
    const particles = useMemo(
        () =>
            Array.from({ length: 24 }, (_, index) => ({
                id: index,
                left: (index * 19) % 100,
                top: (index * 29) % 100,
                size: (index % 3) + 2,
                duration: 5 + (index % 6),
            })),
        [],
    );

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
                <Motion.span
                    key={particle.id}
                    className="absolute rounded-full bg-[#9EABAE]/40"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        width: `${particle.size * 2}px`,
                        height: `${particle.size * 2}px`,
                    }}
                    animate={{ y: [0, -18, 0], opacity: [0.2, 0.55, 0.2] }}
                    transition={{ duration: particle.duration, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
        </div>
    );
}

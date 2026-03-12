import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Motion = motion;

export function MagneticLink({ to, children, variant = 'primary', className = '' }) {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const ref = useRef(null);

    const base =
        variant === 'primary'
            ? 'border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] text-[#FDFEFD]'
            : 'border-[#DCE3E6] bg-[#FDFEFD]/12 text-[#FDFEFD]';

    const handleMove = (event) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) {
            return;
        }
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        setOffset({ x: x * 0.12, y: y * 0.18 });
    };

    const isExternal = typeof to === 'string' && (to.startsWith('http') || to.startsWith('tel:') || to.startsWith('mailto:'));

    return (
        <Motion.div
            ref={ref}
            animate={{ x: offset.x, y: offset.y }}
            transition={{ type: 'spring', stiffness: 320, damping: 18, mass: 0.6 }}
            onMouseMove={handleMove}
            onMouseLeave={() => setOffset({ x: 0, y: 0 })}
            className="inline-flex"
        >
            {isExternal ? (
                <a
                    href={to}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] ${base} ${className}`}
                >
                    {children}
                </a>
            ) : (
                <Link
                    to={to}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] ${base} ${className}`}
                >
                    {children}
                </Link>
            )}
        </Motion.div>
    );
}

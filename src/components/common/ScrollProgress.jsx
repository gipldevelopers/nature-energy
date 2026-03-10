import React from 'react';
import { motion, useScroll } from 'framer-motion';

const Motion = motion;

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    return (
        <Motion.div
            className="fixed inset-x-0 top-0 z-[180] h-1 origin-left bg-gradient-to-r from-[#078DA4] to-[#066F82]"
            style={{ scaleX: scrollYProgress }}
        />
    );
}

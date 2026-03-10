import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../constants/siteConstants';

const Motion = motion;

export function Reveal({ className = '', children, delay = 0 }) {
    return (
        <Motion.div
            className={className}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.22 }}
            transition={{ delay }}
        >
            {children}
        </Motion.div>
    );
}

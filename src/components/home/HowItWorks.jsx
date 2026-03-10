import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, SlidersHorizontal, Flame, Factory } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

const Motion = motion;

const steps = [
    {
        number: '01',
        title: 'Pellet Storage',
        subtitle: 'System',
        detail: 'Biomass pellets stored in hopper units with level monitoring and easy refill access.',
        icon: Building2,
        color: '#078DA4',
    },
    {
        number: '02',
        title: 'Automatic',
        subtitle: 'Feeding',
        detail: 'Metered screw feeder auto-transfers fuel to the combustion chamber on demand.',
        icon: SlidersHorizontal,
        color: '#066F82',
    },
    {
        number: '03',
        title: 'Efficient',
        subtitle: 'Combustion',
        detail: 'Controlled air-fuel ratio delivers stable high-temperature flame in a refractory chamber.',
        icon: Flame,
        color: '#354653',
    },
    {
        number: '04',
        title: 'Industrial',
        subtitle: 'Heat Output',
        detail: 'Clean thermal energy delivered to boilers, dryers, ovens, and process heating lines.',
        icon: Factory,
        color: '#1a3a4a',
    },
];

export function HowItWorks() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.25 });

    return (
        <section
            ref={ref}
            className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD]"
        >
            {/* Header */}
            <div className="border-b border-[#DCE3E6] bg-[#F2F6F7] px-6 py-7 md:px-10">
                <SectionTitle
                    label="How It Works"
                    title="Process timeline from pellet storage to industrial heat output"
                />
            </div>

            {/* ─── DESKTOP ─── */}
            <div className="hidden md:block">
                <div className="relative px-10 pb-10 pt-14">

                    {/* Ghost background numbers */}
                    <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-around px-10">
                        {steps.map((step) => (
                            <span
                                key={step.number}
                                className="select-none text-8xl font-black leading-none text-[#F2F6F7]"
                                style={{ letterSpacing: '-0.04em' }}
                            >
                                {step.number}
                            </span>
                        ))}
                    </div>

                    {/* Rail track */}
                    <div className="relative flex items-center">
                        {/* Back track (full width minus half-circle on each side) */}
                        <div className="absolute inset-x-[4%] top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#EEF2F4]" />

                        {/* Animated fill */}
                        <Motion.div
                            className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full origin-left"
                            style={{
                                left: '4%',
                                right: '4%',
                                background: 'linear-gradient(90deg, #078DA4, #066F82, #354653, #1a3a4a)',
                            }}
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                        />

                        {/* Moving dot on track */}
                        {inView && (
                            <Motion.div
                                className="absolute top-1/2 z-10 h-3 w-3 -translate-y-1/2 rounded-full bg-[#078DA4] shadow-[0_0_10px_3px_rgba(7,141,164,0.5)]"
                                animate={{ left: ['4%', '96%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1.9 }}
                            />
                        )}

                        {/* Step nodes */}
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <Motion.div
                                    key={step.number}
                                    className="relative z-20 flex flex-1 flex-col items-center"
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                                    transition={{ duration: 0.55, delay: 0.2 + idx * 0.3, ease: 'easeOut' }}
                                >
                                    {/* Circle */}
                                    <div className="relative">
                                        {/* Pulse ring */}
                                        <Motion.div
                                            className="absolute inset-0 rounded-full"
                                            style={{ backgroundColor: step.color }}
                                            animate={inView ? { opacity: [0, 0.25, 0], scale: [1, 1.55, 1] } : {}}
                                            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.6 }}
                                        />

                                        {/* Main circle */}
                                        <div
                                            className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
                                            style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)` }}
                                        >
                                            <Icon size={28} className="text-white" />
                                        </div>

                                        {/* Number badge */}
                                        <div
                                            className="absolute -right-1 -top-1 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-white text-[9px] font-black text-white"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            {step.number}
                                        </div>
                                    </div>
                                </Motion.div>
                            );
                        })}
                    </div>

                    {/* Labels row */}
                    <div className="mt-6 flex">
                        {steps.map((step, idx) => {
                            const isLast = idx === steps.length - 1;
                            return (
                                <Motion.div
                                    key={step.number}
                                    className="flex flex-1 flex-col items-center px-3 text-center"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                                    transition={{ duration: 0.5, delay: 0.55 + idx * 0.3, ease: 'easeOut' }}
                                >
                                    <h3 className="text-sm font-bold leading-snug text-[#354653] md:text-base">
                                        {step.title}
                                        <br />
                                        <span style={{ color: step.color }}>{step.subtitle}</span>
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-[#5B707E]" style={{ maxWidth: '160px' }}>
                                        {step.detail}
                                    </p>

                                    {/* Downward arrow indicator except last */}
                                    {!isLast && (
                                        <div className="mt-3 flex items-center gap-1">
                                            <div className="h-px w-6 bg-[#DCE3E6]" />
                                            <div
                                                className="h-1.5 w-1.5 rotate-45 border-b border-r"
                                                style={{ borderColor: step.color }}
                                            />
                                        </div>
                                    )}
                                </Motion.div>
                            );
                        })}
                    </div>

                    {/* Summary strip */}
                    <Motion.div
                        className="mt-8 flex items-center gap-4 rounded-2xl border border-[#DCE3E6] bg-[#F8FAFA] px-6 py-4"
                        initial={{ opacity: 0, y: 12 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    >
                        {/* Progress dots */}
                        <div className="flex items-center gap-1.5">
                            {steps.map((step) => (
                                <div key={step.number} className="h-2 w-2 rounded-full" style={{ backgroundColor: step.color }} />
                            ))}
                        </div>
                        <div className="h-4 w-px bg-[#DCE3E6]" />
                        <p className="flex-1 text-xs leading-relaxed text-[#5B707E]">
                            The entire process is <strong className="text-[#354653]">fully automated</strong> — from pellet storage
                            to heat delivery. PLC-driven controls synchronise each stage, ensuring stable thermal output with minimal
                            manual intervention.
                        </p>
                        <span className="flex-none rounded-full bg-gradient-to-r from-[#078DA4] to-[#066F82] px-3 py-1 text-[11px] font-semibold text-white">
                            Fully Automated
                        </span>
                    </Motion.div>
                </div>
            </div>

            {/* ─── MOBILE ─── */}
            <div className="px-6 py-8 md:hidden">
                {steps.map((step, idx) => {
                    const Icon = step.icon;
                    const isLast = idx === steps.length - 1;
                    return (
                        <div key={step.number} className="flex gap-5">
                            {/* Track column */}
                            <div className="flex flex-col items-center">
                                {/* Numbered circle */}
                                <Motion.div
                                    className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.14)]"
                                    style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}bb)` }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                    transition={{ duration: 0.45, delay: 0.1 + idx * 0.25, type: 'spring', stiffness: 200 }}
                                >
                                    <Icon size={20} className="text-white" />
                                    <div
                                        className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-[8px] font-black text-white"
                                        style={{ backgroundColor: step.color }}
                                    >
                                        {step.number}
                                    </div>
                                </Motion.div>

                                {/* Vertical connector */}
                                {!isLast && (
                                    <Motion.div
                                        className="mt-1 w-[2px] rounded-full"
                                        style={{ backgroundColor: step.color, minHeight: '48px', opacity: 0.3 }}
                                        initial={{ scaleY: 0 }}
                                        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                                        transition={{ duration: 0.5, delay: 0.35 + idx * 0.25, origin: 'top' }}
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <Motion.div
                                className="pb-8 pt-1"
                                initial={{ opacity: 0, x: 16 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
                                transition={{ duration: 0.45, delay: 0.2 + idx * 0.25 }}
                            >
                                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: step.color }}>
                                    Step {step.number}
                                </span>
                                <h3 className="mt-0.5 text-sm font-bold text-[#354653]">
                                    {step.title} {step.subtitle}
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-[#5B707E]">{step.detail}</p>
                            </Motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

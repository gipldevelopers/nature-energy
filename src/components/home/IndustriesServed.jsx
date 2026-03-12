import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { industries } from '../../data/siteData';

const Motion = motion;

const COLORS = ['#066F82', '#354653', '#078DA4', '#1a3a4a', '#0a5c6e', '#2a4060'];

export function IndustriesServed() {
    const [active, setActive] = useState(0);
    const [hovered, setHovered] = useState(null);
    const AUTO_DELAY = 3500;
    const timerRef = useRef(null);

    const resetTimer = useCallback(() => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActive((prev) => (prev + 1) % industries.length);
        }, AUTO_DELAY);
    }, []);

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
    }, [resetTimer]);

    const handleSelect = (idx) => {
        setActive(idx);
        resetTimer();
    };

    const displayed = hovered !== null ? hovered : active;

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6]">
            {/* Top label row */}
            <div className="flex flex-col items-start justify-between gap-4 border-b border-[#DCE3E6] bg-[#F2F6F7] px-6 py-5 md:flex-row md:items-center md:gap-0 md:px-9">
                <div className="min-w-0 flex-1 pr-4">
                    <span className="inline-flex rounded-full border border-[#DCE3E6] bg-[#FDFEFD] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#066F82]">Industries Served</span>
                    <h2 className="mt-2 text-xl font-semibold leading-tight text-[#354653] md:text-2xl">
                        Industrial applications powered by biomass pellet burner systems
                    </h2>
                </div>
                <Link
                    to="/industries"
                    className="flex-none inline-flex items-center gap-2 rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(7,141,164,0.3)] md:ml-4"
                >
                    All Industries <ArrowRight size={14} />
                </Link>
            </div>

            {/* Main body: tab list left + big imagery right */}
            <div className="flex min-h-[480px] flex-col md:flex-row">

                {/* Left — vertical tab list */}
                <div className="flex flex-row overflow-x-auto md:w-[36%] md:flex-col md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {industries.map((ind, idx) => {
                        const isActive = idx === displayed;
                        return (
                            <button
                                key={ind.slug}
                                type="button"
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                                onClick={() => handleSelect(idx)}
                                className="group relative flex flex-none flex-col items-start border-b border-[#DCE3E6] px-5 py-4 text-left transition-colors duration-200 last:border-b-0 md:border-b md:border-r md:last:border-b"
                                style={{
                                    background: isActive
                                        ? `linear-gradient(135deg, ${COLORS[idx % COLORS.length]}18, transparent)`
                                        : 'white',
                                }}
                            >
                                {/* Active indicator bar */}
                                <Motion.div
                                    layoutId="tab-indicator"
                                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full"
                                    style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                                    initial={false}
                                    animate={{ opacity: isActive ? 1 : 0 }}
                                    transition={{ duration: 0.2 }}
                                />

                                <div className="flex w-full items-center justify-between">
                                    <span
                                        className="text-xs font-bold uppercase tracking-[0.14em] transition-colors"
                                        style={{ color: isActive ? COLORS[idx % COLORS.length] : '#9EABAE' }}
                                    >
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <Motion.div
                                        animate={{ rotate: isActive ? 45 : 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <ArrowUpRight
                                            size={14}
                                            style={{ color: isActive ? COLORS[idx % COLORS.length] : '#DCE3E6' }}
                                        />
                                    </Motion.div>
                                </div>

                                <p
                                    className="mt-1 text-sm font-semibold leading-tight transition-colors"
                                    style={{ color: isActive ? '#354653' : '#5B707E' }}
                                >
                                    {ind.name}
                                </p>

                                {/* Expanding detail */}
                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <Motion.p
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden text-xs leading-relaxed text-[#5B707E]"
                                            style={{ marginTop: '6px' }}
                                        >
                                            {ind.intro.slice(0, 80)}…
                                        </Motion.p>
                                    )}
                                </AnimatePresence>

                                {/* Progress bar (only on auto-active) */}
                                {idx === active && hovered === null && (
                                    <Motion.div
                                        key={`prog-${active}`}
                                        className="absolute bottom-0 left-0 h-[2px]"
                                        style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: AUTO_DELAY / 1000, ease: 'linear' }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Right — full-bleed image with overlay */}
                <div className="relative flex-1 overflow-hidden" style={{ minHeight: '320px' }}>
                    <AnimatePresence mode="wait">
                        <Motion.div
                            key={displayed}
                            initial={{ opacity: 0, scale: 1.06 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="absolute inset-0"
                        >
                            {/* Image */}
                            <img
                                src={industries[displayed].image}
                                alt={industries[displayed].name}
                                className="h-full w-full object-cover"
                            />

                            {/* Gradient overlay */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: `linear-gradient(to top, ${COLORS[displayed % COLORS.length]}f0 0%, ${COLORS[displayed % COLORS.length]}80 40%, transparent 70%)`,
                                }}
                            />

                            {/* Content at bottom */}
                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                                <Motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.15, duration: 0.45 }}
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                                        Industry Application
                                    </p>
                                    <h3 className="mt-1.5 text-2xl font-bold text-white md:text-3xl">
                                        {industries[displayed].name}
                                    </h3>
                                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                                        {industries[displayed].intro}
                                    </p>

                                    {/* Use-case pills */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {industries[displayed].useCases.map((uc) => (
                                            <span
                                                key={uc}
                                                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-sm"
                                            >
                                                {uc}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        to={`/industries/${industries[displayed].slug}`}
                                        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/25"
                                    >
                                        Explore Industry <ArrowRight size={14} />
                                    </Link>
                                </Motion.div>
                            </div>
                        </Motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

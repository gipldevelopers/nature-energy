import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Play, Pause } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';
import { products } from '../../data/siteData';

const Motion = motion;

export function ProductShowcase() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const current = products[active];

    // Auto-scroll logic
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % products.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6]">

            {/* ── Header strip ── */}
            <div className="flex flex-col items-start justify-between gap-4 border-b border-[#DCE3E6] bg-[#F2F6F7] px-6 py-5 md:flex-row md:items-center md:gap-0 md:px-9">
                <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#078DA4]">Products</span>
                    <h2 className="mt-1 text-xl font-bold leading-tight text-[#354653] md:text-2xl">
                        Ultra-modern biomass burner product showcase
                    </h2>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsPaused(!isPaused)}
                        className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition-all ${isPaused
                            ? 'border-[#078DA4] bg-white text-[#078DA4]'
                            : 'border-transparent bg-[#078DA4]/10 text-[#078DA4]'
                            }`}
                        title={isPaused ? "Resume Auto-scroll" : "Pause Auto-scroll"}
                    >
                        {isPaused ? <Play size={14} fill="currentColor" /> : <Pause size={14} fill="currentColor" />}
                        {isPaused ? "RESUME" : "PAUSE"}
                    </button>
                    <Link
                        to="/products"
                        className="flex-none inline-flex items-center gap-2 rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-2.5 text-sm font-semibold text-white"
                    >
                        All Products <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            {/* ── Main layout ── */}
            <div className="flex flex-col md:flex-row">

                {/* ── LEFT: Vertical product tabs ── */}
                <div className="flex flex-row overflow-x-auto border-b border-[#DCE3E6] md:w-[28%] md:flex-col md:overflow-visible md:border-b-0 md:border-r [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {products.map((product, idx) => {
                        const isActive = idx === active;
                        return (
                            <button
                                key={product.slug}
                                type="button"
                                onClick={() => {
                                    setActive(idx);
                                }}
                                className="relative flex flex-none flex-col items-start border-r border-[#DCE3E6] px-5 py-4 text-left transition-all duration-200 last:border-r-0 md:border-b md:border-r-0 md:last:border-b-0"
                                style={{ background: isActive ? `linear-gradient(135deg, #078DA410, transparent)` : 'white' }}
                            >
                                {/* Active left bar */}
                                {isActive && (
                                    <Motion.div
                                        layoutId="product-tab-bar"
                                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full bg-[#078DA4] md:block hidden"
                                    />
                                )}
                                {isActive && (
                                    <Motion.div
                                        layoutId="product-tab-bar-mobile"
                                        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full bg-[#078DA4] md:hidden"
                                    />
                                )}

                                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: isActive ? '#078DA4' : '#9EABAE' }}>
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <p className="mt-1 text-sm font-semibold leading-tight" style={{ color: isActive ? '#354653' : '#5B707E', maxWidth: '160px' }}>
                                    {product.name}
                                </p>
                                {isActive && (
                                    <ChevronRight size={14} className="mt-1 text-[#078DA4] hidden md:block" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* ── RIGHT: Feature panel ── */}
                <div className="relative flex-1 overflow-hidden bg-[#FDFEFD]">
                    <AnimatePresence mode="wait">
                        <Motion.div
                            key={active}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -24 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="flex flex-col md:flex-row md:min-h-[440px]"
                        >
                            {/* Image section — dark bg */}
                            <div className="relative md:w-[46%] overflow-hidden bg-[#1e2d38] flex items-center justify-center">
                                {/* Grid texture */}
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.07] z-20"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
                                        backgroundSize: '32px 32px',
                                    }}
                                />

                                {/* Product image/video - used object-cover to fill container and remove black space */}
                                {current.video ? (
                                    <div key={current.video} className="relative aspect-video w-full overflow-hidden md:aspect-auto md:h-full bg-[#0a1118] flex items-center justify-center">
                                        {/* Dynamic blurred background to perfectly fill any remaining space */}
                                        <video
                                            src={current.video}
                                            className="absolute inset-0 h-full w-full object-cover blur-3xl opacity-50 scale-125"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                        />
                                        {/* Main video - set to object-contain so the FULL frame is visible without cropping */}
                                        <video
                                            src={current.video}
                                            className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                            disablePictureInPicture
                                        />
                                    </div>
                                ) : (
                                    <SafeImage
                                        src={current.image}
                                        alt={current.name}
                                        className="relative z-10 h-64 w-full object-cover sm:h-64 md:h-full"
                                    />
                                )}

                                {/* Spec badges floating at bottom */}
                                <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-between px-4">
                                    {current.specs.slice(0, 2).map(([key, val]) => (
                                        <div
                                            key={key}
                                            className="rounded-xl border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md max-w-[48%]"
                                        >
                                            <p className="text-[9px] font-bold uppercase tracking-widest text-white/60">{key}</p>
                                            <p className="mt-0.5 text-[11px] font-bold text-white leading-tight">{val}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Content section */}
                            <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                                {/* Top */}
                                <div>
                                    <span className="inline-flex rounded-full border border-[#078DA4]/30 bg-[#078DA4]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#066F82]">
                                        Product {String(active + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="mt-3 text-2xl font-bold leading-snug text-[#354653] md:text-3xl">
                                        {current.name}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[#5B707E]">
                                        {current.tagline}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="mt-5 grid gap-2">
                                        {current.highlights.slice(0, 3).map((h) => (
                                            <li key={h} className="flex items-start gap-2.5 text-sm text-[#354653]">
                                                <CheckCircle2 size={15} className="mt-0.5 flex-none text-[#078DA4]" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom: animated line + CTA */}
                                <div className="mt-6">
                                    {/* Thin animated teal divider */}
                                    <Motion.div
                                        className="mb-5 h-px origin-left bg-gradient-to-r from-[#078DA4] to-[#066F82]"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                                    />

                                    <div className="flex flex-wrap items-center gap-3">
                                        <Link
                                            to={`/products/${current.slug}`}
                                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(7,141,164,0.28)]"
                                        >
                                            View Full Details <ArrowRight size={14} />
                                        </Link>
                                        <Link
                                            to="/contact#contact_form"
                                            className="inline-flex items-center gap-2 rounded-full border border-[#DCE3E6] px-5 py-2.5 text-sm font-semibold text-[#354653] hover:border-[#078DA4]"
                                        >
                                            Get Quote
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';
import { products } from '../../data/siteData';

const Motion = motion;

export function ProductShowcase() {
    const [active, setActive] = useState(0);
    const current = products[active];

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6]">

            {/* ── Header strip ── */}
            <div className="flex items-center justify-between border-b border-[#DCE3E6] bg-[#F2F6F7] px-6 py-5 md:px-9">
                <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#078DA4]">Products</span>
                    <h2 className="mt-1 truncate text-xl font-bold text-[#354653] md:text-2xl">
                        Ultra-modern biomass burner product showcase
                    </h2>
                </div>
                <Link
                    to="/products"
                    className="ml-4 hidden flex-none items-center gap-2 rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-2.5 text-sm font-semibold text-white md:inline-flex"
                >
                    All Products <ArrowRight size={14} />
                </Link>
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
                                onClick={() => setActive(idx)}
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
                            <div className="relative md:w-[46%] overflow-hidden bg-[#1e2d38]">
                                {/* Grid texture */}
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.07]"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
                                        backgroundSize: '32px 32px',
                                    }}
                                />

                                {/* Product image */}
                                <SafeImage
                                    src={current.image}
                                    alt={current.name}
                                    className="relative z-10 h-44 w-full object-cover sm:h-64 md:h-full"
                                />

                                {/* Spec badges floating at bottom */}
                                {current.specs.slice(0, 2).map(([key, val]) => (
                                    <div
                                        key={key}
                                        className="absolute bottom-4 left-4 z-20 rounded-xl border border-white/15 bg-white/10 px-2 py-1.5 backdrop-blur-md first-of-type:left-4 last-of-type:left-auto last-of-type:right-4 max-w-[45%]"
                                    >
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-white/50">{key}</p>
                                        <p className="mt-0.5 text-xs font-semibold text-white">{val}</p>
                                    </div>
                                ))}
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

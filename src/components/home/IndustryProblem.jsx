import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Fuel, TrendingUp, Leaf, AlertTriangle } from 'lucide-react';

const Motion = motion;

const problems = [
    {
        title: 'High Fuel Cost',
        desc: 'Conventional burners create a heavy monthly fuel burden for industrial heating. Diesel and furnace oil costs erode operating margins across shifts.',
        icon: Fuel,
        stat: '~50%',
        statLabel: 'of opex on fuel',
        accent: '#354653',
    },
    {
        title: 'Rising Energy Prices',
        desc: 'Fuel price volatility disrupts production cost planning and profitability. Every spike in crude impacts heating budgets directly.',
        icon: TrendingUp,
        stat: '3×',
        statLabel: 'price spike risk',
        accent: '#078DA4',
    },
    {
        title: 'Environmental Pressure',
        desc: 'Fossil fuel combustion increases emission load and regulatory compliance risk. Industries face growing scrutiny around carbon footprint.',
        icon: Leaf,
        stat: '↑40%',
        statLabel: 'emission compliance cost',
        accent: '#066F82',
    },
];

export function IndustryProblem() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.2 });

    return (
        <section
            id="industry-problem"
            ref={ref}
            className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6]"
        >
            {/* Dark header band */}
            <div className="relative overflow-hidden bg-[#1e2d38] px-6 py-10 md:px-10">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />
                <AlertTriangle
                    className="pointer-events-none absolute -right-8 -top-8 opacity-[0.04]"
                    size={220}
                    color="white"
                />
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#078DA4]/40 bg-[#078DA4]/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#66D9E8]">
                        <AlertTriangle size={11} /> Industry Problem
                    </span>
                    <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-snug text-white md:text-3xl">
                        Manufacturing industries are still trapped in{' '}
                        <span className="text-[#66D9E8]">high-cost fossil fuel</span> heating
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
                        Diesel, furnace oil, and gas-based burners increase operational cost and environmental pressure — while
                        biomass alternatives remain underutilised across Indian industry.
                    </p>
                </Motion.div>
            </div>

            {/* 3 problem panels */}
            <div className="grid divide-y divide-[#DCE3E6] md:grid-cols-3 md:divide-x md:divide-y-0">
                {problems.map((problem, idx) => {
                    const Icon = problem.icon;
                    return (
                        <Motion.div
                            key={problem.title}
                            className="group relative overflow-hidden bg-[#FDFEFD] px-6 py-8 md:px-7"
                            initial={{ opacity: 0, y: 28 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                            transition={{ duration: 0.55, delay: 0.2 + idx * 0.15, ease: 'easeOut' }}
                        >
                            <Icon
                                className="pointer-events-none absolute -right-6 -top-4 opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]"
                                size={140}
                                color={problem.accent}
                            />
                            <div className="mb-5 flex items-start justify-between">
                                <div className="h-10 w-1 rounded-full" style={{ backgroundColor: problem.accent }} />
                                <div className="text-right">
                                    <p className="text-2xl font-black leading-none" style={{ color: problem.accent }}>{problem.stat}</p>
                                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-[#9EABAE]">{problem.statLabel}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl" style={{ backgroundColor: `${problem.accent}15` }}>
                                    <Icon size={18} style={{ color: problem.accent }} />
                                </div>
                                <h3 className="text-base font-bold text-[#354653]">{problem.title}</h3>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">{problem.desc}</p>
                            <Motion.div
                                className="absolute bottom-0 left-0 h-[2px] rounded-full origin-left"
                                style={{ backgroundColor: problem.accent, right: 0 }}
                                initial={{ scaleX: 0 }}
                                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 + idx * 0.2, ease: 'easeOut' }}
                            />
                        </Motion.div>
                    );
                })}
            </div>
        </section>
    );
}

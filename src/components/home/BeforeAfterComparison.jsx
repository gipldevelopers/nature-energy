import React from 'react';
import { Flame, Leaf, Zap, TrendingDown, RefreshCcw, ShieldCheck, DollarSign } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { useCountUp } from '../../hooks/useCountUp';
import { formatINR } from '../../utils/format';
import { cardBase } from '../../constants/siteConstants';

export function BeforeAfterComparison() {
    const savingsValue = 600000;
    const savingCounter = useCountUp(savingsValue, 1500);

    const metrics = [
        { label: 'Fuel Source', traditional: 'Diesel / FO', nature: 'Biomass Pellets', icon: Flame },
        { label: 'Energy Cost', traditional: 'Volatile High', nature: '50% Lower Stable', icon: DollarSign },
        { label: 'Emissions', traditional: 'High Carbon', nature: 'Carbon Neutral', icon: Leaf },
    ];

    return (
        <section className="mx-auto my-12 w-[min(1280px,94vw)]">
            <div className="mb-6">
                <SectionTitle
                    label="Comparison"
                    title="Traditional vs. Nature Organic Energy"
                />
            </div>

            <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
                {/* Traditional System Card */}
                <Reveal className="rounded-[20px] border border-[#DCE3E6] bg-[#F8FAFB]/60 p-5 md:p-6 transition-colors hover:bg-[#F8FAFB]">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-[#354653]">Legacy Burner</h3>
                        <span className="text-[10px] font-bold text-[#5B707E]/50 uppercase tracking-widest">Legacy</span>
                    </div>

                    <div className="space-y-3">
                        {metrics.map((m, idx) => (
                            <div key={idx} className="flex items-center justify-between border-b border-[#DCE3E6]/40 pb-2 last:border-0">
                                <div className="flex items-center gap-2 text-[#5B707E]">
                                    <m.icon size={14} />
                                    <span className="text-xs font-semibold">{m.label}</span>
                                </div>
                                <span className="text-xs font-medium text-[#354653]">{m.traditional}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 rounded-xl bg-white/50 p-4 border border-[#DCE3E6]/50">
                        <p className="text-[10px] font-bold text-[#5B707E] uppercase tracking-wider mb-1">Monthly Cost</p>
                        <p className="text-xl font-bold text-[#354653]">{formatINR(125000)}</p>
                    </div>
                </Reveal>

                {/* Nature Organic Energy System Card */}
                <Reveal className="rounded-[20px] border border-[#078DA4]/30 bg-white p-5 md:p-6 shadow-lg shadow-[#066F82]/5">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-[#066F82]">Nature Organic Energy</h3>
                        <span className="rounded-full bg-[#078DA4] px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">Optimized</span>
                    </div>

                    <div className="space-y-3">
                        {metrics.map((m, idx) => (
                            <div key={idx} className="flex items-center justify-between border-b border-[#DCE3E6]/40 pb-2 last:border-0">
                                <div className="flex items-center gap-2 text-[#078DA4]">
                                    <m.icon size={14} />
                                    <span className="text-xs font-semibold">{m.label}</span>
                                </div>
                                <span className="text-xs font-bold text-[#066F82]">{m.nature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 rounded-xl bg-[#066F82] p-4 shadow-md shadow-[#066F82]/20">
                        <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">Monthly Cost</p>
                        <p className="text-xl font-bold text-white">{formatINR(65000)}</p>
                    </div>
                </Reveal>
            </div>

            {/* Annual Savings Footer Bar */}
            <div className="mt-8 flex justify-center">
                <Reveal className="overflow-hidden rounded-[20px] bg-[#354653] px-6 py-4 md:px-8 w-fit max-w-2xl">
                    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8 text-center md:text-left">
                        <div className="flex flex-col gap-0.5">
                            <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Potential Annual Benefit</h4>
                            <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                {formatINR(savingCounter)} <span className="text-sm font-medium text-[#2BB673]">Saved</span>
                            </p>
                        </div>
                        <button className="rounded-full bg-[#2BB673] px-7 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-[#2BB673]/20 transition-transform hover:scale-105 active:scale-95 whitespace-nowrap">
                            Calculate Your ROI
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

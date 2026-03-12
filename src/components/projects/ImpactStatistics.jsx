import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Leaf, Award, Timer, TrendingDown } from 'lucide-react';

export function ImpactStatistics() {
    const stats = [
        { label: 'CO2 Offset', value: '25,000 Tons', icon: Leaf, color: 'text-[#2BB673]' },
        { label: 'Fuel Savings', value: '₹40Cr+', icon: TrendingDown, color: 'text-[#078DA4]' },
        { label: 'Operational Hours', value: '2M+', icon: Timer, color: 'text-[#066F82]' },
        { label: 'Client Retention', value: '98%', icon: Award, color: 'text-[#354653]' },
    ];

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((s) => (
                    <Reveal key={s.label} className="relative rounded-2xl border border-[#DCE3E6] bg-[#F2F6F7]/50 p-6 text-center">
                        <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ${s.color}`}>
                            <s.icon size={24} />
                        </div>
                        <p className="text-2xl font-black text-[#354653]">{s.value}</p>
                        <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#5B707E]">{s.label}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

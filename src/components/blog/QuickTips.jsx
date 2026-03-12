import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { cardBase } from '../../constants/siteConstants';

export function QuickTips() {
    const tips = [
        { label: 'Air Flow', val: 'Check secondary fan RPM if smoke appears.' },
        { label: 'Moisture', val: 'Ensure pellets are stored in dry, elevated areas.' },
        { label: 'Ash Removal', val: 'Clean the discharge port every 8 hours of run-time.' },
        { label: 'PLC Log', val: 'Note any temperature fluctuations for the service team.' },
    ];

    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip) => (
                <Reveal key={tip.label} className={`${cardBase} p-6 bg-[#FDFEFD] border-l-4 border-l-[#078DA4]`}>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#078DA4]">{tip.label}</p>
                    <p className="mt-2 text-sm font-medium text-[#354653] leading-relaxed">{tip.val}</p>
                </Reveal>
            ))}
        </section>
    );
}

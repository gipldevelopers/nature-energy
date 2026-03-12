import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { cardBase } from '../../constants/siteConstants';

export function Categories() {
    const cats = [
        { name: 'Fuel Science', count: 12 },
        { name: 'Case Studies', count: 8 },
        { name: 'Technical Docs', count: 15 },
        { name: 'Policy Updates', count: 5 },
        { name: 'Service Guides', count: 9 },
    ];

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-8 md:p-12">
            <SectionTitle label="Explore" title="Topics we cover" />
            <div className="mt-8 flex flex-wrap gap-4">
                {cats.map((cat) => (
                    <Reveal key={cat.name} className="flex items-center gap-3 rounded-2xl border border-[#DCE3E6] bg-[#F2F6F7] px-6 py-4 hover:bg-[#078DA4]/10 transition-colors cursor-pointer group">
                        <span className="font-bold text-[#354653] group-hover:text-[#066F82]">{cat.name}</span>
                        <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-[#5B707E] border border-[#DCE3E6]">{cat.count}</span>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

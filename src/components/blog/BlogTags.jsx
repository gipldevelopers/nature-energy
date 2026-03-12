import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Hash } from 'lucide-react';

export function BlogTags() {
    const tags = ['Biomass', 'ROI', 'Efficiency', 'Gujarat', 'Environment', 'Boilers', 'Automation', 'Pellet-Fuel', 'Renewable-Heat'];

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <Hash size={24} className="text-[#078DA4]" />
                    <h3 className="text-xl font-bold text-[#354653]">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-2">
                    {tags.map((t) => (
                        <Reveal key={t} className="rounded-full border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-1.5 text-xs font-bold text-[#5B707E] hover:border-[#078DA4] hover:text-[#078DA4] transition-all cursor-pointer">
                            #{t}
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

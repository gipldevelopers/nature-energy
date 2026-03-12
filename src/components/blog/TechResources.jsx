import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { FileDown, ArrowRight } from 'lucide-react';

export function TechResources() {
    const resources = [
        { title: 'Project ROI Calculator', size: '1.2 MB', ext: 'XLSX' },
        { title: 'Maintenance Check-list', size: '450 KB', ext: 'PDF' },
        { title: 'Installation Site RFP', size: '200 KB', ext: 'DOCX' },
    ];

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#354653] p-8 md:p-12 text-white">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
                <Reveal>
                    <SectionTitle isDark={true} label="Downloads" title="Technical Planning Resources" />
                    <p className="mt-4 text-sm opacity-70">
                        Everything you need to plan your factory's transition to biomass heating. Download our white-papers and planning templates for free.
                    </p>
                </Reveal>
                <div className="space-y-3">
                    {resources.map((res) => (
                        <Reveal key={res.title} className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#66D9E8]/10 text-[#66D9E8]">
                                    <FileDown size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold group-hover:text-[#66D9E8] transition-colors">{res.title}</h4>
                                    <p className="text-[10px] opacity-40 uppercase font-bold">{res.ext} • {res.size}</p>
                                </div>
                            </div>
                            <ArrowRight size={16} className="text-white/20 group-hover:text-white transition-colors" />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { MapPin } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

export function NationalMap() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-0 overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] md:grid-cols-[1fr_1.5fr]">
            <Reveal className="p-8 lg:p-12 bg-white flex flex-col justify-center">
                <SectionTitle
                    label="Installation Footprint"
                    title="A Pan-India Network of Biomass Power"
                />
                <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">
                    From the textile hubs of Tamil Nadu to the chemical belts of Gujarat, Nature Energy burners are powering India's industrial backbone. We have successfully commissioned projects in over 12 states.
                </p>
                <div className="mt-8 space-y-4">
                    {['Gujarat Hub (50+ Installs)', 'Maharashtra Industrial Belt', 'Tamil Nadu Textile Cluster', 'Punjab Agro-Processing'].map((region) => (
                        <div key={region} className="flex items-center gap-3">
                            <MapPin size={18} className="text-[#078DA4]" />
                            <span className="text-sm font-bold text-[#354653]">{region}</span>
                        </div>
                    ))}
                </div>
            </Reveal>
            <div className="relative min-h-[400px] bg-[#1e2d38] overflow-hidden">
                {/* Simplified visual map representation */}
                <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 800 800" className="h-full w-full fill-white">
                        <path d="M400,100 L500,200 L450,400 L300,500 L200,300 Z" /> {/* Abstract India Shape */}
                    </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="grid grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="animate-pulse">
                                <MapPin size={24} className="text-[#66D9E8]" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-6 right-6 rounded-xl bg-white/10 p-4 backdrop-blur-md border border-white/20">
                    <p className="text-2xl font-black text-white">450+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#66D9E8]">Total Units Live</p>
                </div>
            </div>
        </section>
    );
}

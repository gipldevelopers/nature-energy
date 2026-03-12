import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { BarChart3, TrendingDown } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

export function EfficiencyROI() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-8 md:p-14">
            <div className="grid gap-12 lg:grid-cols-2">
                <Reveal>
                    <SectionTitle label="Financial Tech" title="Thermal Efficiency vs Operational Cost" />
                    <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">
                        High efficiency isn't just a label—it's a direct reduction in your biomass tonnage. By extracting more energy per KG of pellet, we reduce your storage needs and monthly fuel procurement bills.
                    </p>
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#078DA4]/10 text-[#078DA4]">
                                <TrendingDown size={20} />
                            </span>
                            <div>
                                <h4 className="font-bold text-[#354653]">50% Lower Cost</h4>
                                <p className="text-xs text-[#5B707E]">Compared to HSD (Diesel) systems.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#078DA4]/10 text-[#078DA4]">
                                <BarChart3 size={20} />
                            </span>
                            <div>
                                <h4 className="font-bold text-[#354653]">6-9 Month Payback</h4>
                                <p className="text-xs text-[#5B707E]">Average ROI for a 24/7 operating plant.</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                <Reveal className="bg-[#F2F6F7] rounded-3xl p-8 border border-[#DCE3E6]">
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-[#354653]">Efficiency Benchmark</h3>
                            <p className="mt-2 text-xs text-[#5B707E]">Based on ISO 9001 certified laboratory testing.</p>
                        </div>
                        <div className="mt-8 flex items-end gap-2 text-5xl font-black text-[#078DA4]">
                            96.4% <span className="text-sm font-bold text-[#5B707E] mb-2 uppercase tracking-widest">Calculated</span>
                        </div>
                        <div className="mt-4 h-3 rounded-full bg-[#DCE3E6] overflow-hidden">
                            <div className="h-full w-[96.4%] bg-gradient-to-r from-[#078DA4] to-[#066F82]" />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

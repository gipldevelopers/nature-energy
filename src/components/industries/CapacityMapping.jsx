import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { cardBase } from '../../constants/siteConstants';

const Motion = motion;

export function CapacityMapping() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 lg:p-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
                <Reveal>
                    <SectionTitle label="Capacity Mapping" title="Heat Outputs tailored to your plant size" />
                    <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">
                        A 1-ton textile steam boiler requires vastly different thermal geometry than a 20-foot baking oven. Nature Organic Energy engineers map your exact Kcal requirements to our burner capacities.
                    </p>
                    <div className="mt-8 space-y-6">
                        {[
                            { title: 'Low Heat (50K - 3L Kcal)', label: 'Bakeries / Roasters', pct: 30 },
                            { title: 'Mid Heat (3L - 8L Kcal)', label: 'Dryers / Fluid Heaters', pct: 60 },
                            { title: 'High Heat (8L - 25L+ Kcal)', label: 'Chemical Steam Boilers', pct: 90 },
                        ].map((bar, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-xs font-bold text-[#354653]">
                                    <span>{bar.title}</span>
                                    <span>{bar.label}</span>
                                </div>
                                <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#DCE3E6]">
                                    <Motion.div
                                        className="h-full bg-gradient-to-r from-[#078DA4] to-[#066F82]"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${bar.pct}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.2 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
                <Reveal className={`${cardBase} p-8 bg-[#F2F6F7]`}>
                    <h3 className="text-xl font-bold text-[#354653]">Burner Sizing Consultation</h3>
                    <p className="mt-3 text-sm text-[#5B707E]">Don't know your required Kcal output? Provide our engineers with your diesel consumption or boiler ton capacity, and we will calculate the rest.</p>
                    <form className="mt-6 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Your Industry Sector" className="w-full rounded-xl border border-[#DCE3E6] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" />
                        <input type="text" placeholder="Current Diesel/Gas Use (e.g. 50L/hr)" className="w-full rounded-xl border border-[#DCE3E6] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" />
                        <button className="rounded-xl bg-[#066F82] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#354653]">
                            Request Calculation
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}

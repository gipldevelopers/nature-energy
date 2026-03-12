import React from 'react';
import { ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { imageSet } from '../../data/siteData';

export function QualityAssurance() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-0 overflow-hidden rounded-[24px] border border-[#DCE3E6] md:grid-cols-2">
            <Reveal className="bg-[#354653] p-8 text-white md:p-12 flex flex-col justify-center">
                <ShieldCheck size={40} className="text-[#66D9E8]" />
                <h2 className="mt-6 text-3xl font-bold">Advanced Manufacturing Facility</h2>
                
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                        <p className="text-sm leading-relaxed text-[#66D9E8] font-semibold md:text-base mb-4">
                            We operate a fully equipped manufacturing unit with:
                        </p>
                        <ul className="grid gap-3">
                            {[
                                'CNC Cutting Machines',
                                'Precision Fabrication Tools',
                                'Quality Testing Equipment',
                                'Skilled Technical Workforce'
                            ].map((q) => (
                                <li key={q} className="flex items-center gap-3 text-sm text-white/90">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#66D9E8] flex-shrink-0" /> {q}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm leading-relaxed text-[#66D9E8] font-semibold md:text-base mb-4">
                            Each pellet burner undergoes strict quality checks to ensure:
                        </p>
                        <ul className="grid gap-3">
                            {[
                                'Maximum Efficiency',
                                'Stable Flame Control',
                                'Long Operational Life',
                                'Safety Compliance'
                            ].map((q) => (
                                <li key={q} className="flex items-start gap-2 text-sm font-semibold text-[#66D9E8]">
                                    <span className="mt-[2px]">✓</span> <span className="text-white/90 font-normal">{q}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/5 p-4 border border-white/10">
                    <p className="text-sm leading-relaxed text-white/90 font-medium md:text-base text-center">
                        Our production capacity allows us to fulfill bulk and customized industrial orders efficiently.
                    </p>
                </div>
            </Reveal>
            <div className="relative min-h-[300px] w-full bg-[#1e2d38]">
                <SafeImage src={imageSet.machine1} alt="Quality Check" className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                    <div className="inline-flex items-center gap-3 w-fit rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
                        <Award size={24} className="text-[#66D9E8]" />
                        <div>
                            <p className="text-sm font-bold text-white">ISO Certified Manufacturing</p>
                            <p className="text-[10px] text-white/70">Highest grade industrial standards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

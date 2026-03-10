import React from 'react';
import { ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { imageSet } from '../../data/siteData';

export function QualityAssurance() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-0 overflow-hidden rounded-[24px] border border-[#DCE3E6] md:grid-cols-2">
            <Reveal className="bg-[#354653] p-8 text-white md:p-12">
                <ShieldCheck size={40} className="text-[#66D9E8]" />
                <h2 className="mt-6 text-3xl font-bold">Uncompromising Quality Assurance</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                    An industrial burner is the beating heart of a process plant. Factory downtime equates directly to extreme financial loss. That's why Nature Energy operates an exhaustive multi-point testing regime.
                </p>
                <ul className="mt-6 grid gap-4">
                    {[
                        'High-heat refractory lining thermal tests',
                        'Screw-feeder continuous torque analysis',
                        'Sensory & PLC board voltage stress test',
                        'Real-fire simulated combustion efficiency check'
                    ].map((q) => (
                        <li key={q} className="flex items-center gap-3 text-sm text-white/90">
                            <CheckCircle2 size={16} className="text-[#2BB673]" /> {q}
                        </li>
                    ))}
                </ul>
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

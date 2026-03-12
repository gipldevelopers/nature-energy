import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Wind, Zap } from 'lucide-react';

export function DualStageCombustion() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-8 md:p-12">
            <div className="grid gap-12 lg:grid-cols-2">
                <Reveal>
                    <SectionTitle
                        label="Architectural Efficiency"
                        title="Dual-Stage Air Injection"
                    />
                    <div className="mt-8 space-y-6">
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#078DA4] text-white font-bold">1</div>
                            <div>
                                <h4 className="font-bold text-[#354653]">Primary Air Gasification</h4>
                                <p className="mt-1 text-sm text-[#5B707E]">Oxygen is fed from beneath the pellet bed, initiating partial oxidation and releasing syngas.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#066F82] text-white font-bold">2</div>
                            <div>
                                <h4 className="font-bold text-[#354653]">Secondary Air Turbo-Charge</h4>
                                <p className="mt-1 text-sm text-[#5B707E]">High-pressure air is injected via tangential nozzles, creating a vortex that ensures complete methane-burn.</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                <Reveal className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-sm border border-[#DCE3E6]">
                        <Wind size={32} className="text-[#078DA4]" />
                        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#5B707E]">Draft Pressure</p>
                        <p className="mt-1 text-xl font-bold text-[#354653]">120 Pa</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-[#354653] p-6 text-white shadow-sm">
                        <Zap size={32} className="text-[#66D9E8]" />
                        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-white/60">Burn Quality</p>
                        <p className="mt-1 text-xl font-bold">Smokeless</p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

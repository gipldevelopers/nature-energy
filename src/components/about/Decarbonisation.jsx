import React from 'react';
import { Leaf } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export function Decarbonisation() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#1e2d38] text-center text-white">
            <div className="relative px-6 py-16 md:px-12 md:py-20">
                <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
                <Reveal>
                    <Leaf size={48} className="mx-auto text-[#2BB673]" />
                    <h2 className="mt-6 text-3xl font-bold md:text-4xl">Decarbonising the Supply Chain</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                        At Nature Energy, our core mission transcends hardware. By replacing heavy liquid fossil fuels with renewable agricultural waste, we actively help top-tier factories meet strict global ESG (Environmental, Social, and Governance) targets.
                    </p>
                    <div className="mx-auto mt-8 flex w-fit items-center gap-4 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
                        <span className="text-xl font-bold text-[#66D9E8]">100%</span>
                        <div className="h-6 w-px bg-white/20" />
                        <span className="text-xs font-medium uppercase tracking-widest text-white/80">Carbon Neutral Fuel Source</span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

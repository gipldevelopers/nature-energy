import React from 'react';
import { Target, Globe2 } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { cardBase } from '../../constants/siteConstants';

export function MissionVision() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-2">
            <Reveal className={`${cardBase} bg-[#F2F6F7] p-6 text-center md:p-10`}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FDFEFD] shadow-sm">
                    <Target size={28} className="text-[#078DA4]" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#354653]">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">
                    To help industries reduce fuel dependency, lower operating costs, and move towards green energy systems.
                </p>
            </Reveal>

            <Reveal className={`${cardBase} bg-gradient-to-br from-[#066F82] to-[#354653] p-6 text-center md:p-10`}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                    <Globe2 size={28} className="text-[#66D9E8]" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                    To become the undisputed global leader in commercial biomass energy technology solutions, setting the benchmark for combustion efficiency, automation, and reliability in intensive industrial applications.
                </p>
            </Reveal>
        </section>
    );
}

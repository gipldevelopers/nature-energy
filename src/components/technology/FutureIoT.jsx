import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Radio, Cloud } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

export function FutureIoT() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-8 md:p-14 overflow-hidden relative">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#078DA4]/5" />

            <Reveal className="max-w-3xl">
                <SectionTitle label="Connectivity" title="NatureConnect IoT Roadmap" />
                <p className="mt-4 text-sm leading-relaxed text-[#5B707E] lg:text-lg">
                    We are currently developing the NatureConnect module—a cloud-based monitoring solution that will allow factory owners to track fuel consumption and system health in real-time from anywhere in the world.
                </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
                <Reveal className="flex gap-4 p-6 rounded-2xl bg-[#F2F6F7]/50 border border-[#DCE3E6]">
                    <Radio size={32} className="text-[#078DA4] shrink-0" />
                    <div>
                        <h4 className="font-bold text-[#354653]">Predictive Service</h4>
                        <p className="mt-1 text-xs text-[#5B707E]">AI algorithms will predict when a wearing part (like a motor brush or screw) needs replacement before it fails.</p>
                    </div>
                </Reveal>
                <Reveal className="flex gap-4 p-6 rounded-2xl bg-[#F2F6F7]/50 border border-[#DCE3E6]">
                    <Cloud size={32} className="text-[#078DA4] shrink-0" />
                    <div>
                        <h4 className="font-bold text-[#354653]">Cloud Data History</h4>
                        <p className="mt-1 text-xs text-[#5B707E]">Download monthly reports on thermal output and pellet consumption for carbon-credit verification.</p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

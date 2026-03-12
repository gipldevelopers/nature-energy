import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { ShieldAlert, Lock, BellRing } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

export function TripleSafety() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-3">
            <Reveal className={`${cardBase} p-8 bg-[#FDFEFD] flex flex-col items-center text-center`}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E74C3C]/10 mb-6">
                    <ShieldAlert size={32} className="text-[#E74C3C]" />
                </div>
                <h3 className="text-xl font-bold text-[#354653]">Hardware Fail-Safe</h3>
                <p className="mt-2 text-sm text-[#5B707E]">Mechanical rotary air-locks prevent any back-flow of hot air into the hopper.</p>
            </Reveal>
            <Reveal className={`${cardBase} p-8 bg-[#FDFEFD] flex flex-col items-center text-center`}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#078DA4]/10 mb-6">
                    <Lock size={32} className="text-[#078DA4]" />
                </div>
                <h3 className="text-xl font-bold text-[#354653]">Software Lock</h3>
                <p className="mt-2 text-sm text-[#5B707E]">PLC shuts off fuel feeding instantly if the secondary fan loses power or RPM drops.</p>
            </Reveal>
            <Reveal className={`${cardBase} p-8 bg-[#FDFEFD] flex flex-col items-center text-center`}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#354653]/10 mb-6">
                    <BellRing size={32} className="text-[#354653]" />
                </div>
                <h3 className="text-xl font-bold text-[#354653]">Audio-Visual Alarms</h3>
                <p className="mt-2 text-sm text-[#5B707E]">Integrated hooter and strobe system alerts floor operators before critical cut-off occurs.</p>
            </Reveal>
        </section>
    );
}

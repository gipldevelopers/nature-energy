import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Fan, Settings } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

export function AirControlVFD() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Reveal className={`${cardBase} p-8 lg:col-span-1`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#078DA4]/12">
                    <Fan size={24} className="text-[#078DA4]" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#354653]">Intelligent Oxygen Mapping</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">
                    Too much air cools the flame. Too little air creates smoke. Our VFD-driven fans map the exact current to air-flow ratio required to keep the flame lean and clean.
                </p>
            </Reveal>
            <div className={`${cardBase} p-8 lg:col-span-2 bg-[#F2F6F7]`}>
                <SectionTitle
                    label="Variable Frequency"
                    title="VFD & Speed Calibration"
                    text="Traditional burners use on/off fans. Nature Organic Energy uses real-time frequency modulation (VFD) that responds in milliseconds to pressure changes within the boiler."
                    noReveal={true}
                />
                <div>
                    {['Zero Inrush Current', 'Soft Start/Stop', 'Noise Mitigation', 'Energy Conservation'].map((ft) => (
                        <span key={ft} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#DCE3E6] bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#354653]">
                            <Settings size={14} className="text-[#078DA4]" /> {ft}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

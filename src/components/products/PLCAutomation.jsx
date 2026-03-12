import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { Zap, Thermometer, Fan, ShieldCheck } from 'lucide-react';
import { imageSet } from '../../data/siteData';
import { cardBase } from '../../constants/siteConstants';

export function PLCAutomation() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-2 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className={`${cardBase} relative bg-[#1e2d38] p-0 overflow-hidden min-h-[240px] sm:min-h-[300px]`}>
                <SafeImage src={imageSet.controlRoom} alt="Control Panel" className="h-full w-full object-cover opacity-60" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1e2d38] to-transparent p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#66D9E8]">Smart Control</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">Full PLC Interface</p>
                </div>
            </Reveal>
            <Reveal className={`${cardBase} flex flex-col justify-center bg-[#FDFEFD] p-6 md:p-10`}>
                <SectionTitle
                    label="Automation"
                    title="Zero human error. 100% thermal control."
                    text="Our systems feature advanced Programmable Logic Controllers (PLCs) with touchscreen HMI. Operators can set temperature targets and walk away. The system automatically regulates fuel feeding and fan draft based on real-time feedback from boiler temperature probes."
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                    {[
                        { label: 'Auto-Ignition Module', icon: Zap },
                        { label: 'Temp Sensor Feedback', icon: Thermometer },
                        { label: 'Draft Fan Sync', icon: Fan },
                        { label: 'Fault Alarm System', icon: ShieldCheck }
                    ].map((ft) => (
                        <div key={ft.label} className="flex items-center gap-3">
                            <ft.icon size={16} className="text-[#078DA4]" />
                            <span className="text-xs font-semibold text-[#354653]">{ft.label}</span>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}

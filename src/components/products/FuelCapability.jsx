import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Leaf, CheckCircle2 } from 'lucide-react';

export function FuelCapability() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-0 overflow-hidden rounded-[24px] border border-[#DCE3E6] md:grid-cols-2">
            <Reveal className="bg-[#066F82] p-8 text-white md:p-12">
                <Leaf size={40} className="text-[#66D9E8]" />
                <h2 className="mt-6 text-2xl font-bold md:text-3xl text-white">Multi-Biomass Compatibility</h2>
                <p className="mt-4 text-sm leading-relaxed text-white">
                    While optimized for premium wood pellets, our heavy-duty burners are engineered to handle variations in fuel density. This fuel flexibility protects you against local availability shocks.
                </p>
                <ul className="mt-6 grid gap-3">
                    {['Sawdust / Wood Pellets', 'Groundnut Shell Pellets', 'Mustard Husk Pellets', 'Agro-waste Briquettes (Crushed)'].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 size={16} className="text-[#66D9E8]" /> {f}
                        </li>
                    ))}
                </ul>
            </Reveal>
            <Reveal className="p-8 md:p-12 bg-[#FDFEFD] flex flex-col justify-center">
                <SectionTitle label="Environmental Edge" title="Zero Fossil Carbon Emissions" />
                <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">
                    Switching to our biomass products shifts your industry from fossil-carbon positive to carbon-neutral. Biomass combustion only releases the carbon the plant absorbed during its lifetime. Our clean-burn technology ensures you easily pass local pollution control board (PCB) norms.
                </p>
                <div className="mt-6 inline-flex rounded-xl bg-[#078DA4]/10 p-4">
                    <p className="text-xs font-semibold text-[#066F82]">
                        Our burners typically reduce SOx and NOx emissions by over 80% compared to furnace oil!
                    </p>
                </div>
            </Reveal>
        </section>
    );
}

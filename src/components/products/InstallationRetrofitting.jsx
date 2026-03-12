import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Wrench } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

export function InstallationRetrofitting() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-[1fr_2fr]">
            <Reveal className={`${cardBase} bg-[#FDFEFD] p-6 text-center shadow-sm`}>
                <Wrench size={40} className="mx-auto text-[#078DA4]" />
                <h3 className="mt-4 text-lg font-bold text-[#354653]">Seamless Retrofitting</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B707E]">
                    Switching to biomass doesn't mean discarding your boiler. Our burners are custom-flanged to bolt directly onto your existing diesel or gas equipment.
                </p>
            </Reveal>
            <Reveal className={`${cardBase} bg-[#F2F6F7] p-6 md:p-8`}>
                <h3 className="text-xl font-bold text-[#354653]">The Commissioning Pipeline</h3>
                <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {['Site Audit', 'Custom Assembly', 'Bolt-on Retrofit', 'Test Firing'].map((step, idx) => (
                        <React.Fragment key={step}>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#078DA4]/10 text-sm font-bold text-[#066F82]">
                                    {idx + 1}
                                </div>
                                <p className="mt-2 text-xs font-bold text-[#354653] uppercase">{step}</p>
                            </div>
                            {idx < 3 && <div className="hidden h-px w-12 bg-[#DCE3E6] md:block" />}
                        </React.Fragment>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}

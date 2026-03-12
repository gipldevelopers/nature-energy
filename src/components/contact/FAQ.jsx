import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { MessageSquare } from 'lucide-react';

export function FAQ() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-10">
            <SectionTitle label="FAQ" title="Common Pre-Sales Questions" />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {[
                    { q: 'Will I need to replace my existing boiler?', a: 'No. Our burners are designed as "bolt-on" retrofits. We remove your diesel/gas burner and flange the biomass burner directly to your existing boiler face.' },
                    { q: 'Where do I procure the biomass pellets?', a: 'India has a massive, rapidly growing pellet manufacturing network. We will connect you to reliable, A-grade pellet suppliers close to your factory.' },
                    { q: 'Are these systems fully automatic?', a: 'Yes. Temperature probes in the boiler talk to our PLC. The system automatically adjusts fuel feeding and fan draft to maintain your target temperature—exactly like a diesel burner.' },
                    { q: 'Do you offer warranty on the machines?', a: 'Absolutely. We provide a comprehensive 1-year warranty on all manufacturing defects and core components, backed by our rapid-response service team.' }
                ].map((faq, i) => (
                    <Reveal key={i} className="rounded-2xl bg-[#F2F6F7] p-6">
                        <h3 className="flex items-start gap-3 text-sm font-bold text-[#354653]">
                            <MessageSquare size={16} className="mt-0.5 flex-none text-[#078DA4]" />
                            {faq.q}
                        </h3>
                        <p className="mt-3 pl-7 text-sm leading-relaxed text-[#5B707E]">{faq.a}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

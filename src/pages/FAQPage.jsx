import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageHero } from '../components/layout/PageHero';
import { Reveal } from '../components/common/Reveal';
import { faqGroups, imageSet } from '../data/siteData';
import { cardBase } from '../constants/siteConstants';

const Motion = motion;

export default function FAQPage() {
    const [open, setOpen] = useState('0-0');

    return (
        <main className="pb-8">
            <PageHero
                label="FAQ"
                title="Frequently asked questions"
                subtitle="Fuel, savings, applications, operation, and maintenance of biomass pellet burner systems."
                image={imageSet.boilerPlant}
            />

            <section className="mx-auto mt-6 w-[min(980px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
                {faqGroups.map((group, gIndex) => (
                    <Reveal key={group.group} className="mb-4 last:mb-0">
                        <h3 className="text-xl font-semibold text-[#354653]">{group.group}</h3>
                        <div className="mt-3 grid gap-3">
                            {group.items.map((item, iIndex) => {
                                const key = `${gIndex}-${iIndex}`;
                                const active = open === key;
                                return (
                                    <article key={item.question} className={`${cardBase} overflow-hidden p-0`}>
                                        <button
                                            type="button"
                                            onClick={() => setOpen(active ? '' : key)}
                                            className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium text-[#354653]"
                                        >
                                            {item.question}
                                            <ChevronDown size={16} className={`transition ${active ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {active ? (
                                                <Motion.p
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="px-4 pb-4 text-sm leading-relaxed text-[#5B707E]"
                                                >
                                                    {item.answer}
                                                </Motion.p>
                                            ) : null}
                                        </AnimatePresence>
                                    </article>
                                );
                            })}
                        </div>
                    </Reveal>
                ))}
            </section>
        </main>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Hammer, Wrench, TestTube2, Truck } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { processSteps } from '../../data/siteData';
import { cardBase, stagger, fadeUp } from '../../constants/siteConstants';

const Motion = motion;

export function ManufacturingProcess() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
            <SectionTitle label="Manufacturing Process" title="How our industrial burners are built" text="A rigid, ISO-standard production pipeline guarantees extreme durability." />
            <Motion.div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false }}>
                {processSteps.map((step, index) => {
                    const Icon = [Cog, Hammer, Wrench, TestTube2, Truck][index % 5];
                    return (
                        <Motion.article key={step.title} variants={fadeUp} className={`${cardBase} relative p-5 bg-[#F2F6F7]`}>
                            <div className="absolute right-4 top-4 text-4xl font-black text-[#DCE3E6]/60">
                                0{index + 1}
                            </div>
                            <Icon size={24} className="text-[#078DA4]" />
                            <h3 className="mt-4 text-sm font-bold text-[#354653] md:text-base">{step.title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#5B707E]">{step.detail}</p>
                        </Motion.article>
                    );
                })}
            </Motion.div>
        </section>
    );
}

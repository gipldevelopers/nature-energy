import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Flame, TrendingUp, Truck, ShieldCheck } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { stagger, fadeUp, cardBase } from '../../constants/siteConstants';

const Motion = motion;

export function WhyChooseUs() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
            <SectionTitle label="Why Choose Nature Energy" title="Industrial trust built on engineering, manufacturing, and support" />
            <Motion.div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false }}>
                {[
                    { title: 'In-house manufacturing facility', icon: Factory },
                    { title: 'Advanced combustion engineering', icon: Flame },
                    { title: 'Energy efficient heating systems', icon: TrendingUp },
                    { title: 'Nationwide installation support', icon: Truck },
                    { title: 'Reliable after-sales service', icon: ShieldCheck },
                ].map((item) => (
                    <Motion.article key={item.title} variants={fadeUp} className={`${cardBase} p-4`}>
                        <item.icon size={20} className="text-[#078DA4]" />
                        <h3 className="mt-3 text-base font-semibold text-[#354653]">{item.title}</h3>
                    </Motion.article>
                ))}
            </Motion.div>
        </section>
    );
}

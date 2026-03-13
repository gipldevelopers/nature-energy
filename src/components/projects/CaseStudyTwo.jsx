import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/siteData';

export function CaseStudyTwo() {
    const post = projects[1];
    if (!post) return null;

    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-0 overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#1e2d38] text-white md:grid-cols-2">
            <Reveal className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
                <SectionTitle noReveal={true} isDark={true} label="Operational Success" title="Continuous 24/7 Boiler Run" />
                <p className="mt-4 text-sm leading-relaxed opacity-70">
                    A food manufacturing process in {post.location} required sustained steam. Our automated burner maintained constant pressure for 45 days.
                </p>
                <ul className="mt-6 space-y-3">
                    {['Zero Carbon Soot', 'Automatic Ash Extraction', 'Remote HMI Monitoring'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#66D9E8]">
                            <ArrowUpRight size={14} /> {item}
                        </li>
                    ))}
                </ul>
            </Reveal>
            <Reveal className="relative min-h-[350px] order-1 md:order-2" delay={150}>
                <SafeImage src={post.image} alt={post.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1e2d38]/80" />
            </Reveal>
        </section>
    );
}

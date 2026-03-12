import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { industries } from '../../data/siteData';

export function SectorMatrix() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-10">
            <div className="text-center md:text-left">
                <SectionTitle label="Sector Matrix" title="Select a sector to view use-cases" text="We have successfully commissioned pellet burner systems across every major processing industry." />
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {industries.map((ind) => (
                    <Reveal key={ind.slug} className="group relative overflow-hidden rounded-2xl border border-[#DCE3E6]">
                        <SafeImage src={ind.image} alt={ind.name} className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-5">
                            <h3 className="text-xl font-bold text-white group-hover:text-[#66D9E8] transition-colors">{ind.name}</h3>
                            <p className="mt-1 line-clamp-2 text-xs text-white/80">{ind.intro}</p>
                            <Link to={`/industries/${ind.slug}`} className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#66D9E8] opacity-0 transition-opacity group-hover:opacity-100">
                                View Thermal Profiles <ArrowRight size={14} />
                            </Link>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

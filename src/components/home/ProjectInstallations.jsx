import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { projects } from '../../data/siteData';
import { cardBase } from '../../constants/siteConstants';

export function ProjectInstallations() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
            <SectionTitle label="Project Installations" title="Real case studies and measurable industrial savings" />
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <Reveal key={project.slug} className={`${cardBase} p-4`}>
                        <div className="h-44 w-full overflow-hidden rounded-xl border border-[#DCE3E6]">
                            <SafeImage src={project.image} alt={project.name} className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-[#354653]">{project.name}</h3>
                        <p className="mt-1 text-sm text-[#5B707E]">{project.industry} - {project.location}</p>
                        <p className="mt-1 text-sm text-[#5B707E]">Burner Capacity: {project.capacity}</p>
                        <p className="mt-1 text-sm text-[#2BB673]">Fuel Saving: {project.savings}</p>
                        <Link to={`/projects/${project.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#066F82]">
                            View Case Study <ArrowRight size={14} />
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

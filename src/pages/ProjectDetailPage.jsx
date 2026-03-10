import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Reveal } from '../components/common/Reveal';
import { projects } from '../data/siteData';
import { cardBase } from '../constants/siteConstants';
import NotFoundPage from './NotFoundPage';

export default function ProjectDetailPage() {
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return <NotFoundPage />;
    }

    return (
        <main className="pb-8">
            <PageHero label="Project Detail" title={project.name} subtitle={`${project.industry} | ${project.location}`} image={project.image} />

            <div className="mx-auto mt-6 w-[min(1280px,94vw)]">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#078DA4] hover:text-[#354653] transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Projects
                </Link>
            </div>

            <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-3">
                <Reveal className={`${cardBase} p-6`}>
                    <h3 className="text-lg font-semibold text-[#354653]">Challenge</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">{project.challenge}</p>
                </Reveal>
                <Reveal className={`${cardBase} p-6`}>
                    <h3 className="text-lg font-semibold text-[#354653]">Solution</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">{project.solution}</p>
                </Reveal>
                <Reveal className={`${cardBase} p-6`}>
                    <h3 className="text-lg font-semibold text-[#354653]">Result</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">{project.result}</p>
                    <p className="mt-3 text-sm text-[#2BB673]">Savings: {project.savings}</p>
                </Reveal>
            </section>
        </main>
    );
}

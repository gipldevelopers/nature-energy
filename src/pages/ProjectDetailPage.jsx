import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ArrowLeft, ArrowRight, TrendingDown, Target, ShieldCheck,
    Calendar, Clock, MapPin, Factory, CheckCircle2, ChevronRight, Quote
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { Reveal } from '../components/common/Reveal';
import { SafeImage } from '../components/common/SafeImage';
import { projects, products, imageSet } from '../data/siteData';
import { cardBase } from '../constants/siteConstants';
import NotFoundPage from './NotFoundPage';

export default function ProjectDetailPage() {
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);

    if (!project) return <NotFoundPage />;

    const otherProjects = projects.filter(p => p.slug !== slug);
    const recommendedProducts = products.slice(0, 2);

    const metricIcons = [TrendingDown, Target, ShieldCheck, Calendar];
    const gallery = [project.image, imageSet.installSite, imageSet.machine1, imageSet.boilerRoom, imageSet.factoryHall];

    return (
        <main className="pb-12">
            <PageHero
                label="Case Study"
                title={project.name}
                subtitle={`${project.industry} · ${project.location} · Completed ${project.completionYear || '2023'}`}
                image={project.image}
            />

            {/* Back link */}
            <div className="mx-auto mt-6 w-[min(1280px,94vw)]">
                <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#078DA4] hover:text-[#354653] transition-colors">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
            </div>

            {/* ── SECTION 1: Project Header Snapshot ── */}
            <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#354653] p-6 text-white md:p-10">
                <div className="grid gap-6 md:grid-cols-[1fr_auto]">
                    <div>
                        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#66D9E8]">
                            {project.industry}
                        </span>
                        <h2 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">{project.name}</h2>
                        <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
                            <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {project.location}</span>
                            <span className="inline-flex items-center gap-1.5"><Factory size={14} /> {project.capacity}</span>
                            {project.projectDuration && (
                                <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {project.projectDuration}</span>
                            )}
                            {project.completionYear && (
                                <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> Completed {project.completionYear}</span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center backdrop-blur-sm">
                            <p className="text-3xl font-extrabold text-[#2BB673]">{project.savings}</p>
                            <p className="mt-1 text-xs text-white/60">Verified Fuel Cost Reduction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: Challenge / Solution / Result ── */}
            <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-3">
                {[
                    { label: 'The Challenge', text: project.challenge, color: 'border-l-4 border-[#E74C3C]' },
                    { label: 'Our Solution', text: project.solution, color: 'border-l-4 border-[#078DA4]' },
                    { label: 'The Result', text: project.result, color: 'border-l-4 border-[#2BB673]' },
                ].map(({ label, text, color }) => (
                    <Reveal key={label} className={`${cardBase} bg-[#FDFEFD] p-6 ${color}`}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#5B707E]">{label}</p>
                        <p className="mt-3 text-sm leading-relaxed text-[#354653]">{text}</p>
                    </Reveal>
                ))}
            </section>

            {/* ── SECTION 3: Key Metrics + Technologies ── */}
            {project.keyMetrics && (
                <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-2">
                    {/* Metrics */}
                    <Reveal className={`${cardBase} bg-[#F2F6F7] p-6`}>
                        <SectionTitle label="Impact Numbers" title="Measurable project outcomes" />
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            {project.keyMetrics.map(({ label, value }, i) => {
                                const Icon = metricIcons[i % metricIcons.length];
                                return (
                                    <div key={label} className={`${cardBase} bg-white p-4 text-center`}>
                                        <Icon size={22} className="mx-auto text-[#078DA4]" />
                                        <p className="mt-2 text-xl font-extrabold text-[#354653]">{value}</p>
                                        <p className="mt-1 text-[11px] text-[#5B707E]">{label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </Reveal>

                    {/* Technologies */}
                    <Reveal className={`${cardBase} bg-[#FDFEFD] p-6`}>
                        <SectionTitle label="Technologies Deployed" title="Systems used in this project" />
                        <div className="mt-6 grid gap-3">
                            {(project.technologies || []).map((tech, i) => (
                                <div key={tech} className="flex items-center gap-3 rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#078DA4] text-[11px] font-bold text-white">
                                        {i + 1}
                                    </span>
                                    <span className="text-sm font-semibold text-[#354653]">{tech}</span>
                                    <CheckCircle2 size={15} className="ml-auto text-[#2BB673]" />
                                </div>
                            ))}
                        </div>
                        <Link to="/products" className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#078DA4] hover:text-[#354653] transition-colors">
                            Explore our products <ArrowRight size={12} />
                        </Link>
                    </Reveal>
                </section>
            )}

            {/* ── SECTION 4: Project Timeline ── */}
            {project.timeline && (
                <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-10">
                    <SectionTitle label="Project Execution" title="Phase-by-phase implementation" />
                    <div className="relative mt-8">
                        {/* Vertical line */}
                        <div className="absolute left-[18px] top-0 hidden h-full w-0.5 bg-[#DCE3E6] md:block" />
                        <div className="flex flex-col gap-6">
                            {project.timeline.map(({ phase, detail }, idx) => (
                                <Reveal key={phase} className="flex gap-4 md:gap-6">
                                    <div className="relative shrink-0">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#078DA4] text-xs font-bold text-white shadow-md">
                                            {idx + 1}
                                        </div>
                                    </div>
                                    <div className={`${cardBase} flex-1 bg-white p-4`}>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#078DA4]">{phase}</p>
                                        <p className="mt-1 text-sm leading-relaxed text-[#5B707E]">{detail}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── SECTION 5: Modern Gallery Full Width ── */}
            <section className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#0d1a22] p-6 md:p-8">
                <div className="mb-6 flex items-end justify-between">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#66D9E8]">Project Gallery</span>
                        <h3 className="mt-1 text-xl font-bold text-white">Installation &amp; Commissioning Photos</h3>
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold text-white/60">{gallery.length} Photos</span>
                </div>

                {/* Bento grid: 1 large left + 4 small right */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {/* Large feature image */}
                    <Reveal className="col-span-2 row-span-2 lg:col-span-2">
                        <SafeImage
                            src={gallery[0]}
                            alt={`${project.name} main`}
                            className="h-64 w-full rounded-2xl object-cover opacity-90 hover:opacity-100 transition duration-500 hover:scale-[1.02] lg:h-[280px]"
                        />
                    </Reveal>
                    {/* Smaller grid images */}
                    {gallery.slice(1, 5).map((img, index) => (
                        <Reveal key={`gallery-${index}`}>
                            <SafeImage
                                src={img}
                                alt={`${project.name} photo ${index + 2}`}
                                className="h-[130px] w-full rounded-xl object-cover opacity-80 hover:opacity-100 transition duration-500 hover:scale-[1.03]"
                            />
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── SECTION 5b: Testimonial + Next Project + CTA ── */}
            <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] items-start gap-4 md:grid-cols-3">

                {/* Testimonial — inline style overrides cardBase white bg */}
                {project.testimonial && (
                    <Reveal
                        className="col-span-1 rounded-2xl border border-[#29404f] p-6 shadow-[0_16px_36px_rgba(53,70,83,0.2)]"
                        style={{ background: '#354653' }}
                    >
                        <Quote size={28} className="text-[#66D9E8]/70" />
                        <p className="mt-3 text-sm leading-relaxed italic text-white/85">"{project.testimonial.quote}"</p>
                        <div className="mt-4 border-t border-white/15 pt-4">
                            <p className="text-xs font-bold text-[#66D9E8]">{project.testimonial.name}</p>
                            <p className="text-[11px] text-white/55">{project.testimonial.company}</p>
                        </div>
                    </Reveal>
                )}

                {/* Next Project */}
                {otherProjects.length > 0 && (
                    <Reveal className={`${cardBase} overflow-hidden p-0`}>
                        <SafeImage src={otherProjects[0].image} alt={otherProjects[0].name} className="h-36 w-full object-cover" />
                        <div className="p-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#5B707E]">Next Case Study</p>
                            <h4 className="mt-1 text-sm font-bold text-[#354653]">{otherProjects[0].name}</h4>
                            <p className="mt-0.5 text-xs text-[#2BB673]">{otherProjects[0].savings}</p>
                            <Link
                                to={`/projects/${otherProjects[0].slug}`}
                                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#078DA4] hover:text-[#354653] transition-colors"
                            >
                                Read Case Study <ChevronRight size={12} />
                            </Link>
                        </div>
                    </Reveal>
                )}

                {/* CTA — inline style overrides cardBase white bg */}
                <Reveal
                    className="rounded-2xl border border-[#056070] p-6 shadow-[0_16px_36px_rgba(6,111,130,0.22)]"
                    style={{ background: 'linear-gradient(135deg, #066F82 0%, #354653 100%)' }}
                >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#66D9E8]">Your Turn</p>
                    <h3 className="mt-2 text-base font-bold text-white">Want results like this?</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">Book a free thermal audit and we'll show you the exact ROI for your facility.</p>
                    <Link
                        to="/contact#contact_form"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#066F82] hover:bg-[#F2F6F7] transition"
                    >
                        Book Free Audit <ArrowRight size={12} />
                    </Link>
                </Reveal>
            </section>


            {/* ── SECTION 6: Recommended Products ── */}
            <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
                <SectionTitle label="Systems Used" title="Products that powered this project" />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {recommendedProducts.map(product => (
                        <Reveal key={product.slug} className={`${cardBase} flex gap-4 bg-[#F2F6F7] p-4`}>
                            <SafeImage
                                src={product.image}
                                alt={product.name}
                                className="h-20 w-24 shrink-0 rounded-xl object-cover"
                            />
                            <div className="flex flex-col justify-center">
                                <h4 className="text-sm font-bold text-[#354653]">{product.name}</h4>
                                <p className="mt-1 text-xs text-[#5B707E] line-clamp-2">{product.tagline}</p>
                                <Link
                                    to={`/products/${product.slug}`}
                                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#078DA4] hover:text-[#354653] transition-colors"
                                >
                                    View Specs <ArrowRight size={11} />
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </main>
    );
}

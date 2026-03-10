import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Factory, Flame, Settings2, Building2, ArrowLeft, TrendingDown, Target, ShieldCheck, ChevronRight } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { Reveal } from '../components/common/Reveal';
import { industries, projects, products } from '../data/siteData';
import { cardBase } from '../constants/siteConstants';
import NotFoundPage from './NotFoundPage';
import { SafeImage } from '../components/common/SafeImage';

export default function IndustryDetailPage() {
    const { slug } = useParams();
    const industry = industries.find((item) => item.slug === slug);

    if (!industry) {
        return <NotFoundPage />;
    }

    // Find related projects (if any)
    const relatedProjects = projects.filter(p => {
        // Simple logic to match project industry with current industry name
        const industryKeyword = industry.name.split(' ')[0].toLowerCase();
        return p.industry.toLowerCase().includes(industryKeyword) || p.industry.toLowerCase().includes(industry.name.toLowerCase());
    });

    // Select a couple of recommended products globally
    const recommendedProducts = products.slice(0, 2);

    return (
        <main className="pb-8">
            <PageHero label="Industry Detail" title={industry.name} subtitle={industry.intro} image={industry.image} />

            <div className="mx-auto mt-6 w-[min(1280px,94vw)]">
                <Link
                    to="/industries"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#078DA4] hover:text-[#354653] transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Industries
                </Link>
            </div>

            {/* Section 1: Challenge & Benefits */}
            <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-2">
                <Reveal className={`${cardBase} p-6 lg:p-8 bg-[#FDFEFD]`}>
                    <h3 className="mb-4 border-b border-[#DCE3E6] pb-4 text-xl font-bold text-[#354653] md:text-2xl">The Challenge</h3>
                    <p className="text-sm leading-relaxed text-[#5B707E] md:text-base">{industry.challenge}</p>
                </Reveal>
                <Reveal className={`${cardBase} p-6 lg:p-8 bg-[#FDFEFD]`}>
                    <h3 className="mb-4 border-b border-[#DCE3E6] pb-4 text-xl font-bold text-[#354653] md:text-2xl">Benefits of Biomass Heating</h3>
                    <ul className="list-disc space-y-3 pl-5 text-sm text-[#5B707E] md:text-base">
                        {industry.benefits.map((item) => (
                            <li key={item} className="leading-relaxed">{item}</li>
                        ))}
                    </ul>
                </Reveal>
            </section>

            {/* Section 2: Performance Impact (ROI) */}
            <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#354653] p-6 text-white md:p-10">
                <div className="mb-8 text-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-[#078DA4]">Expected Impact</span>
                    <h2 className="mt-2 text-2xl font-bold md:text-3xl">Transforming {industry.name}</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                        <TrendingDown size={32} className="mx-auto mb-3 text-[#078DA4]" />
                        <h4 className="mb-2 text-3xl font-extrabold text-white">40-50%</h4>
                        <p className="text-sm text-gray-300">Reduction in Thermal Fuel Costs</p>
                    </Reveal>
                    <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm" delay={100}>
                        <Target size={32} className="mx-auto mb-3 text-[#078DA4]" />
                        <h4 className="mb-2 text-3xl font-extrabold text-white">99%</h4>
                        <p className="text-sm text-gray-300">System Uptime Reliability</p>
                    </Reveal>
                    <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm" delay={200}>
                        <ShieldCheck size={32} className="mx-auto mb-3 text-[#078DA4]" />
                        <h4 className="mb-2 text-3xl font-extrabold text-white">Zero</h4>
                        <p className="text-sm text-gray-300">Visible Smoke operation</p>
                    </Reveal>
                </div>
            </section>

            {/* Section 3: Typical Applications */}
            <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-10">
                <SectionTitle label="Applications" title="Where we deploy our technology" />
                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {industry.useCases.map((item, index) => {
                        const Icon = [Factory, Flame, Settings2, Building2][index % 4];
                        return (
                            <Reveal key={item} className={`${cardBase} bg-[#FDFEFD] p-5 transition-shadow hover:shadow-md`}>
                                <Icon size={24} className="text-[#078DA4]" />
                                <h3 className="mt-4 text-base font-bold leading-tight text-[#354653]">{item}</h3>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* Section 4: Featured Success Stories */}
            {relatedProjects.length > 0 && (
                <section className="mx-auto mt-6 w-[min(1280px,94vw)] p-6">
                    <SectionTitle label="Success Stories" title={`Proven in ${industry.name}`} />
                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {relatedProjects.map((project) => (
                            <Link key={project.slug} to={`/projects/${project.slug}`}>
                                <Reveal className={`${cardBase} group flex h-full cursor-pointer flex-col overflow-hidden p-0`}>
                                    <div className="relative h-48 sm:h-56">
                                        <SafeImage
                                            src={project.image}
                                            alt={project.name}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#E74C3C] shadow-sm backdrop-blur-sm">
                                            {project.savings}
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col p-5">
                                        <h3 className="text-lg font-bold leading-tight text-[#354653] transition-colors group-hover:text-[#078DA4]">{project.name}</h3>
                                        <p className="mt-2 text-sm text-[#078DA4]">{project.location}</p>
                                        <p className="mb-4 mt-3 line-clamp-3 text-sm text-[#5B707E]">{project.challenge}</p>
                                        <div className="mt-auto flex items-center gap-1 text-sm font-bold text-[#354653]">
                                            Read Case Study <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Reveal>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* Section 5: Recommended High-End Products */}
            <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-white p-6 shadow-sm md:p-10">
                <SectionTitle label="Engineering Solutions" title="Recommended for this sector" />
                <div className="mt-8 grid gap-6 md:grid-cols-2 mb-4">
                    {recommendedProducts.map((product) => (
                        <Reveal key={product.slug} className="flex flex-col gap-6 rounded-2xl border border-[#DCE3E6] bg-[#F2F6F7] p-4 md:flex-row md:p-6">
                            <div className="aspect-square w-full shrink-0 overflow-hidden rounded-xl bg-gray-200 md:w-2/5">
                                <SafeImage src={product.image} alt={product.name} className="h-full w-full object-cover mix-blend-multiply" />
                            </div>
                            <div className="flex flex-1 flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#354653]">{product.name}</h3>
                                <p className="mt-2 line-clamp-2 text-sm text-[#5B707E]">{product.tagline}</p>
                                <ul className="mb-6 mt-4 space-y-2 text-xs font-medium text-[#5B707E]">
                                    {product.highlights.slice(0, 2).map((hl, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-[#078DA4]" /> {hl}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={`/products/${product.slug}`}
                                    className="mt-auto inline-flex self-start items-center gap-2 rounded-full border border-[#DCE3E6] bg-white px-5 py-2 text-sm font-semibold text-[#354653] shadow-sm transition-all hover:border-[#078DA4] hover:text-[#078DA4]"
                                >
                                    View Specifications
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Section 6: Dynamic Call to Action */}
            <section className="relative mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#078DA4] to-[#046172] p-8 text-center text-white shadow-lg md:p-12">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 mix-blend-screen blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 mix-blend-screen blur-3xl" />

                <h2 className="relative z-10 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                    Upgrade Your Thermal Operations
                </h2>
                <p className="relative z-10 mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                    Schedule a free thermal load assessment for your {industry.name.toLowerCase()} facility. Our engineering team will analyze your current heating setup and propose a biomass solution.
                </p>
                <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-extrabold tracking-wide text-[#078DA4] shadow-md transition-all hover:bg-gray-50 hover:shadow-lg"
                    >
                        Schedule Assessment
                    </Link>
                    <Link
                        to="/faq"
                        className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3 text-sm font-extrabold tracking-wide text-white transition-colors hover:bg-white/10"
                    >
                        Read FAQs
                    </Link>
                </div>
            </section>
        </main>
    );
}

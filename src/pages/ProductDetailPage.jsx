import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, ChevronDown, ChevronUp, ArrowRight, Cpu, ShieldCheck, Wrench } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { Reveal } from '../components/common/Reveal';
import { SafeImage } from '../components/common/SafeImage';
import { imageSet, products } from '../data/siteData';
import { cardBase } from '../constants/siteConstants';
import NotFoundPage from './NotFoundPage';

function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`${cardBase} overflow-hidden`}>
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between p-5 text-left"
            >
                <span className="text-sm font-bold text-[#354653] md:text-base">{q}</span>
                {open ? <ChevronUp size={18} className="text-[#078DA4] shrink-0" /> : <ChevronDown size={18} className="text-[#5B707E] shrink-0" />}
            </button>
            {open && (
                <div className="border-t border-[#DCE3E6] px-5 pb-5 pt-4 text-sm leading-relaxed text-[#5B707E]">
                    {a}
                </div>
            )}
        </div>
    );
}

export default function ProductDetailPage() {
    const { slug } = useParams();
    const product = products.find((item) => item.slug === slug);

    if (!product) return <NotFoundPage />;

    const related = product.relatedSlugs
        ? products.filter(p => product.relatedSlugs.includes(p.slug))
        : products.filter(p => p.slug !== slug).slice(0, 2);

    const gallery = [product.image, imageSet.machine1, imageSet.boilerRoom, imageSet.burnerMain, imageSet.installSite];

    return (
        <main className="pb-12">
            <PageHero label="Product Detail" title={product.name} subtitle={product.tagline} image={product.image} />

            {/* Back link */}
            <div className="mx-auto mt-6 w-[min(1280px,94vw)]">
                <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[#078DA4] hover:text-[#354653] transition-colors">
                    <ArrowLeft size={16} /> Back to Products
                </Link>
            </div>

            {/* ── SECTION 1: Overview + Key Features ── */}
            <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <Reveal className={`${cardBase} p-6 md:p-8`}>
                    <SectionTitle label="Overview" title="Engineered for industrial heating efficiency" />
                    {product.overview.map((item, i) => (
                        <p key={i} className="mt-3 text-sm leading-relaxed text-[#5B707E] md:text-base">{item}</p>
                    ))}
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                        {product.highlights.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-sm text-[#354653]">
                                <CheckCircle2 size={16} className="mt-0.5 text-[#2BB673] shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
                <Reveal className={`${cardBase} overflow-hidden p-0`}>
                    <SafeImage src={product.image} alt={product.name} className="h-56 w-full object-cover" />
                    <div className="p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#078DA4]">System Highlights</p>
                        <ul className="mt-3 grid gap-2">
                            {product.applications.slice(0, 4).map(app => (
                                <li key={app} className="flex items-center gap-2 text-sm text-[#5B707E]">
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#078DA4]" /> {app}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </section>

            {/* ── SECTION 2: Technical Specifications ── */}
            <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
                <SectionTitle label="Technical Specifications" title="Detailed specification matrix" />
                <div className={`${cardBase} mt-6 overflow-x-auto p-1`}>
                    <table className="w-full border-collapse text-sm">
                        <tbody>
                            {product.specs.map(([key, value]) => (
                                <tr key={key} className="border-b border-[#DCE3E6] last:border-b-0">
                                    <th className="w-[40%] px-4 py-3 text-left font-semibold text-[#354653] bg-[#F2F6F7]/60">{key}</th>
                                    <td className="px-4 py-3 text-[#5B707E]">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {product.techDetails && (
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {product.techDetails.map(({ label, value }) => (
                            <Reveal key={label} className={`${cardBase} bg-white p-4`}>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#078DA4]">{label}</p>
                                <p className="mt-1 text-sm font-semibold text-[#354653]">{value}</p>
                            </Reveal>
                        ))}
                    </div>
                )}
            </section>

            {/* ── SECTION 3: Why Choose + Process Flow ── */}
            <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-2">
                {product.whyChoose && (
                    <div className="grid gap-4 content-start">
                        <Reveal>
                            <SectionTitle label="Advantages" title="Why choose this model?" />
                        </Reveal>
                        {product.whyChoose.map((item, i) => {
                            const icons = [Cpu, ShieldCheck, Wrench];
                            const Icon = icons[i % 3];
                            return (
                                <Reveal key={item.title} className={`${cardBase} flex items-start gap-4 bg-[#FDFEFD] p-5`}>
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#078DA4]/10">
                                        <Icon size={20} className="text-[#078DA4]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#354653]">{item.title}</h3>
                                        <p className="mt-1 text-xs leading-relaxed text-[#5B707E]">{item.desc}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                )}
                <Reveal className={`${cardBase} bg-[#F2F6F7] p-6`}>
                    <SectionTitle label="Process Flow" title="How it works step by step" />
                    <ol className="mt-6 flex flex-col gap-4">
                        {product.processFlow.map((step, idx) => (
                            <li key={step} className="flex items-start gap-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#078DA4] text-xs font-bold text-white">
                                    {idx + 1}
                                </span>
                                <p className="pt-1 text-sm leading-relaxed text-[#5B707E]">{step}</p>
                            </li>
                        ))}
                    </ol>
                </Reveal>
            </section>

            {/* ── SECTION 4: Image Gallery ── */}
            <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6">
                <SectionTitle label="Product Gallery" title="System views and installation photos" />
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {gallery.map((img, index) => (
                        <Reveal key={`${img}-${index}`}>
                            <SafeImage
                                src={img}
                                alt={`${product.name} gallery ${index + 1}`}
                                className="h-36 w-full rounded-xl border border-[#DCE3E6] object-cover transition duration-300 hover:scale-[1.03]"
                            />
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── SECTION 5: FAQs + Related Products ── */}
            <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] items-start gap-4 lg:grid-cols-[1.3fr_0.7fr]">
                {/* Left: FAQs */}
                {product.faqs && (
                    <div>
                        <Reveal>
                            <SectionTitle label="Common Questions" title="Frequently asked questions" />
                        </Reveal>
                        <div className="mt-4 grid gap-3">
                            {product.faqs.map(({ q, a }) => (
                                <FAQItem key={q} q={q} a={a} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Right: Compact Related + CTA */}
                <div className="flex flex-col gap-3">
                    <Reveal>
                        <SectionTitle label="Also Explore" title="Related products" />
                    </Reveal>

                    {/* Horizontal compact cards */}
                    {related.map(p => (
                        <Reveal key={p.slug} className={`${cardBase} group flex items-center gap-3 overflow-hidden p-3`}>
                            <SafeImage
                                src={p.image}
                                alt={p.name}
                                className="h-16 w-20 shrink-0 rounded-xl object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="min-w-0">
                                <h3 className="truncate text-sm font-bold text-[#354653]">{p.name}</h3>
                                <p className="mt-0.5 line-clamp-1 text-xs text-[#5B707E]">{p.tagline}</p>
                                <Link
                                    to={`/products/${p.slug}`}
                                    className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-[#078DA4] hover:text-[#354653] transition-colors"
                                >
                                    View Product <ArrowRight size={11} />
                                </Link>
                            </div>
                        </Reveal>
                    ))}

                    {/* CTA */}
                    <Reveal
                        className="rounded-2xl border border-[#056070] p-5 text-white shadow-[0_16px_36px_rgba(6,111,130,0.2)]"
                        style={{ background: 'linear-gradient(135deg,#066F82 0%,#354653 100%)' }}
                    >
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#66D9E8]">Get a Quote</p>
                        <h3 className="mt-1.5 text-sm font-bold text-white">Ready to order this system?</h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/70">Share your thermal load — our engineers will calculate your payback period.</p>
                        <Link
                            to="/contact#contact_form"
                            className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#066F82] hover:bg-[#F2F6F7] transition"
                        >
                            Request Quotation <ArrowRight size={11} />
                        </Link>
                    </Reveal>
                </div>
            </section>

        </main>
    );
}

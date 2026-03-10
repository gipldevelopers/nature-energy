import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/layout/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { Reveal } from '../components/common/Reveal';
import { SafeImage } from '../components/common/SafeImage';
import { imageSet, products } from '../data/siteData';
import { cardBase } from '../constants/siteConstants';
import NotFoundPage from './NotFoundPage';

export default function ProductDetailPage() {
    const { slug } = useParams();
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return <NotFoundPage />;
    }

    const gallery = [product.image, imageSet.machine1, imageSet.boilerRoom, imageSet.burnerMain, imageSet.pellets];

    return (
        <main className="pb-8">
            <PageHero label="Product Detail" title={product.name} subtitle={product.tagline} image={product.image} />

            <div className="mx-auto mt-6 w-[min(1280px,94vw)]">
                <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#078DA4] hover:text-[#354653] transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Products
                </Link>
            </div>

            <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <Reveal className={`${cardBase} p-6`}>
                    <SectionTitle label="Overview" title="Engineered for industrial heating efficiency" />
                    {product.overview.map((item) => (
                        <p key={item} className="mt-3 text-sm leading-relaxed text-[#5B707E] md:text-base">
                            {item}
                        </p>
                    ))}
                </Reveal>

                <Reveal className={`${cardBase} p-6`}>
                    <h3 className="text-xl font-semibold text-[#354653]">Key Features</h3>
                    <ul className="mt-4 grid gap-3 text-sm text-[#5B707E] md:text-base">
                        {product.highlights.map((item) => (
                            <li key={item} className="inline-flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-[#2BB673]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </section>

            <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
                <SectionTitle label="Technical Specifications" title="Detailed specification matrix" />
                <div className={`${cardBase} mt-6 overflow-x-auto p-1`}>
                    <table className="w-full border-collapse text-sm">
                        <tbody>
                            {product.specs.map(([key, value]) => (
                                <tr key={key} className="border-b border-[#DCE3E6] last:border-b-0">
                                    <th className="w-[36%] px-4 py-3 text-left font-semibold text-[#354653]">{key}</th>
                                    <td className="px-4 py-3 text-[#5B707E]">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-2">
                <Reveal className={`${cardBase} p-6`}>
                    <h3 className="text-xl font-semibold text-[#354653]">Applications</h3>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5B707E] md:text-base">
                        {product.applications.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h3 className="mt-6 text-xl font-semibold text-[#354653]">Process Flow</h3>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5B707E] md:text-base">
                        {product.processFlow.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal className={`${cardBase} p-6`}>
                    <h3 className="text-xl font-semibold text-[#354653]">Image Gallery</h3>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        {gallery.map((img, index) => (
                            <SafeImage key={`${img}-${index}`} src={img} alt={`${product.name} gallery ${index + 1}`} className="h-32 w-full rounded-xl border border-[#DCE3E6] object-cover" />
                        ))}
                    </div>
                </Reveal>
            </section>

            <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
                <SectionTitle label="Get Quote" title="Request technical proposal" />
                <form className={`${cardBase} mt-6 grid gap-3 p-5 md:grid-cols-2`}>
                    <label className="text-sm text-[#354653]">Name<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="text" placeholder="Your name" /></label>
                    <label className="text-sm text-[#354653]">Company Name<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="text" placeholder="Company" /></label>
                    <label className="text-sm text-[#354653]">Phone<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="tel" placeholder="Phone" /></label>
                    <label className="text-sm text-[#354653]">Industry<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="text" placeholder="Industry" /></label>
                    <label className="text-sm text-[#354653] md:col-span-2">Message<textarea className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" rows="4" placeholder="Requirement" /></label>
                    <button type="button" className="inline-flex rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-3 text-sm font-semibold text-[#FDFEFD] md:col-span-2 md:w-fit">
                        Get Quotation
                    </button>
                </form>
            </section>
        </main>
    );
}

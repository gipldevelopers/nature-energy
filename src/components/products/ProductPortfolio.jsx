import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/siteData';
import { cardBase } from '../../constants/siteConstants';

export function ProductPortfolio() {
    return (
        <section className="mx-auto my-8 w-[min(1280px,94vw)]">
            <div className="mb-6 px-2">
                <SectionTitle
                    label="Portfolio"
                    title="Our Industrial Systems"
                />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <Reveal key={product.slug} className="group relative flex flex-col rounded-[20px] border border-[#DCE3E6] bg-white p-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#066F82]/5">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] border border-[#DCE3E6]/30">
                            <SafeImage
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        <div className="mt-3 flex flex-1 flex-col px-1">
                            <h3 className="text-sm font-bold text-[#354653] group-hover:text-[#066F82] transition-colors">{product.name}</h3>
                            <p className="mt-1 text-[11px] leading-snug text-[#5B707E] line-clamp-2">{product.tagline}</p>

                            <div className="mt-3 flex gap-2">
                                {product.specs.slice(0, 2).map(([key, val]) => (
                                    <div key={key} className="flex-1 min-w-0 rounded-lg bg-[#F8FAFB] p-2 border border-[#DCE3E6]/20">
                                        <p className="text-[8px] uppercase font-bold text-[#9EABAE]">{key}</p>
                                        <p className="text-[10px] font-bold text-[#354653] truncate mt-0.5">{val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link
                            to={`/products/${product.slug}`}
                            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#066F82] py-2 text-[12px] font-bold text-white transition-all hover:bg-[#078DA4] active:scale-95"
                        >
                            View Specs <ArrowRight size={12} />
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

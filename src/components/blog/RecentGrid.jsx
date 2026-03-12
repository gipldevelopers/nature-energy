import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../../data/siteData';
import { cardBase } from '../../constants/siteConstants';

export function RecentGrid() {
    // Skip the first blog (featured) and show the rest
    const posts = blogs.slice(1);

    if (posts.length === 0) return null;

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-8 md:p-12">
            <SectionTitle label="Insights" title="Recently Published" />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {posts.map((post) => (
                    <Reveal key={post.slug} className={`${cardBase} group flex flex-col p-0 overflow-hidden`}>
                        <div className="h-56 overflow-hidden shrink-0">
                            <SafeImage src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#078DA4]">
                                <Tag size={12} /> Technology &amp; Innovation
                            </div>
                            <h3 className="mt-3 text-lg font-bold text-[#354653] leading-tight group-hover:text-[#066F82] transition-colors line-clamp-2">{post.title}</h3>
                            <p className="mt-2 text-sm text-[#5B707E] line-clamp-2 font-medium">{post.excerpt}</p>
                            <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#078DA4] group-hover:gap-3 transition-all">
                                Read More <ArrowRight size={14} />
                            </Link>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

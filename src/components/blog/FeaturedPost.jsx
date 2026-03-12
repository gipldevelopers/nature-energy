import React from 'react';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../../data/siteData';

export function FeaturedPost() {
    const post = blogs[0]; // Use first blog from siteData

    if (!post) return null;

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] overflow-hidden">
            <div className="grid lg:grid-cols-[1.4fr_1fr]">
                <div className="relative h-64 lg:h-full min-h-[350px]">
                    <SafeImage src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 lg:p-10">
                        <span className="rounded-full bg-[#078DA4] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Editor's Choice</span>
                        <h2 className="mt-4 text-2xl font-bold text-white md:text-5xl leading-tight">{post.title}</h2>
                    </div>
                </div>
                <Reveal className="p-8 lg:p-14 flex flex-col justify-center bg-[#F2F6F7]">
                    <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-[#5B707E]">
                        <span className="flex items-center gap-2 font-black uppercase tracking-widest text-[#078DA4]">Industrial Insights</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> 8 Min Read</span>
                    </div>
                    <p className="mt-6 text-base leading-relaxed text-[#5B707E] font-medium">
                        {post.excerpt}
                    </p>
                    <div className="mt-10">
                        <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-3 rounded-full bg-[#078DA4] px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#078DA4]/20 transition hover:bg-[#354653]">
                            Read Full Case Study <ArrowRight size={18} />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

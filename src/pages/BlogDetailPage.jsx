import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Reveal } from '../components/common/Reveal';
import { blogs } from '../data/siteData';
import { cardBase } from '../constants/siteConstants';
import NotFoundPage from './NotFoundPage';

export default function BlogDetailPage() {
    const { slug } = useParams();
    const blog = blogs.find((item) => item.slug === slug);

    if (!blog) {
        return <NotFoundPage />;
    }

    const related = blogs.filter((item) => item.slug !== blog.slug).slice(0, 2);

    return (
        <main className="pb-8">
            <PageHero label="Blog Detail" title={blog.title} subtitle={blog.excerpt} image={blog.image} />

            <div className="mx-auto mt-6 w-[min(1280px,94vw)]">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#078DA4] hover:text-[#354653] transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Blog
                </Link>
            </div>

            <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <Reveal className={`${cardBase} p-6 md:p-8`}>
                    {blog.content.map((paragraph) => (
                        <p key={paragraph} className="mt-3 text-sm leading-relaxed text-[#5B707E] md:text-base">
                            {paragraph}
                        </p>
                    ))}
                </Reveal>
                <Reveal className={`${cardBase} p-6`}>
                    <h3 className="text-lg font-semibold text-[#354653]">Related Articles</h3>
                    <div className="mt-4 grid gap-3">
                        {related.map((item) => (
                            <Link key={item.slug} to={`/blog/${item.slug}`} className="rounded-xl border border-[#DCE3E6] p-3 text-sm text-[#5B707E] transition hover:border-[#078DA4]/40 hover:text-[#066F82]">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </Reveal>
            </section>
        </main>
    );
}

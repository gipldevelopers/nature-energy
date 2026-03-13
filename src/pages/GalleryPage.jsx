import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageHero } from '../components/layout/PageHero';
import { SafeImage } from '../components/common/SafeImage';
import { imageSet, galleryImages } from '../data/siteData';
import { cardBase } from '../constants/siteConstants';

const Motion = motion;

export default function GalleryPage() {
    const [filter, setFilter] = useState('all');
    const [selected, setSelected] = useState(null);

    const categories = ['all', 'manufacturing', 'installation', 'application', 'machine', 'technology', 'fuel'];
    const items = filter === 'all' ? galleryImages : galleryImages.filter((item) => item.category === filter);

    return (
        <main className="pb-8">
            <PageHero
                label="Gallery"
                title="Manufacturing, machine installation, industrial applications"
                subtitle="Premium image gallery with category filter and interactive full-view mode."
                image={imageSet.factoryHall}
            />

            <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
                <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2 no-scrollbar">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setFilter(category)}
                            className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs uppercase tracking-[0.08em] flex-shrink-0 ${filter === category
                                ? 'border-[#078DA4]/40 bg-[#078DA4]/12 text-[#066F82]'
                                : 'border-[#DCE3E6] text-[#5B707E]'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelected(item)}
                            className={`${cardBase} group overflow-hidden p-0 text-left`}
                        >
                            <div className="overflow-hidden">
                                <SafeImage src={item.image} alt={item.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-110" />
                            </div>
                            <p className="px-4 py-3 text-sm font-medium text-[#354653]">{item.title}</p>
                        </button>
                    ))}
                </div>
            </section>

            <AnimatePresence>
                {selected ? (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] grid place-items-center bg-[#354653]/90 p-4"
                        onClick={() => setSelected(null)}
                    >
                        <div className="w-[min(1100px,94vw)] overflow-hidden rounded-2xl border border-[#DCE3E6] bg-[#FDFEFD]">
                            <SafeImage src={selected.image} alt={selected.title} className="max-h-[80svh] w-full object-contain" />
                            <p className="px-4 py-3 text-sm font-semibold text-[#354653]">{selected.title}</p>
                        </div>
                    </Motion.div>
                ) : null}
            </AnimatePresence>
        </main>
    );
}

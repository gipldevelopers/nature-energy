import React from 'react';
import { SafeImage } from '../common/SafeImage';
import { Reveal } from '../common/Reveal';

export function PageHero({ label, title, subtitle, image }) {
    return (
        <section className="mx-auto mt-0 mb-8 w-[min(1280px,94vw)] relative">
            <div className="relative overflow-hidden rounded-[24px] border border-[#DCE3E6]">
                <SafeImage src={image} alt={title} className="h-[45svh] min-h-[280px] sm:h-[56svh] sm:min-h-[360px] w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(53,70,83,0.88),rgba(6,111,130,0.68))]" />
                <div className="industrial-texture absolute inset-0" />
                <div className="absolute inset-0 mx-auto flex h-full w-full items-end p-4 sm:p-6 md:p-10">
                    <Reveal>
                        <span className="inline-flex rounded-full border border-[#DCE3E6]/35 bg-[#FDFEFD]/14 px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.1em] text-[#FDFEFD]">
                            {label}
                        </span>
                        <h1 className="mt-2 max-w-4xl text-xl font-semibold leading-tight text-[#FDFEFD] sm:text-2xl md:text-4xl lg:text-5xl">{title}</h1>
                        <p className="mt-2 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-[#FDFEFD]/88 lg:text-lg">{subtitle}</p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

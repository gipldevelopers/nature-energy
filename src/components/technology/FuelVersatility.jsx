import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { Leaf, Info } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

export function FuelVersatility() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <SectionTitle label="Resource Tech" title="Multi-Feed Mechanical Agitation" />
                    <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">
                        Biomass pellets vary by region (Wood, Groundnut, Mustard). Our specialized hopper design includes an internal vibration and agitation motor that prevents "bridging"—ensuring even low-quality, high-ash fuels flow smoothly into the combustion screw.
                    </p>
                    <div className="mt-8 flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm border border-[#DCE3E6]">
                        <Info size={24} className="text-[#078DA4] shrink-0" />
                        <p className="text-xs italic text-[#5B707E]">
                            "The ability to switch between wood pellets and agro-waste pellets without recalibrating the hardware is a core Nature Energy patent-pending advantage."
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-none w-full md:w-auto">
                    {[
                        { img: '/wooden-pallet-stack-icon-isometric-vector-store-retail_96318-149857.jpg' },
                        { img: '/rice-husk-jpg.jpg' },
                        { img: '/pngtree-pearl-in-seashell-clipart-illustration-royalty-free-graphic-png-image_16792817.png' },
                        { img: '/images.jpg' }
                    ].map((f, i) => (
                        <div key={i} className="group relative h-24 w-24 overflow-hidden rounded-2xl bg-white shadow-lg transform rotate-3 even:rotate-[-3deg] border border-[#DCE3E6]">
                            <SafeImage src={f.img} alt={f.label} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2">
                                <p className="text-[9px] font-black uppercase text-white leading-tight text-center">{f.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

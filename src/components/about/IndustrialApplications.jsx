import React, { useState } from 'react';
import { industrialApplicationsImages } from '../../data/siteData';
import { SectionTitle } from '../common/SectionTitle';
import { MagneticLink } from '../common/MagneticLink';
import { CheckCircle2 } from 'lucide-react';

export function IndustrialApplications() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = industrialApplicationsImages[activeIndex];

    return (
        <section className="py-4 md:py-8 flex items-center justify-center min-h-[100svh]">
            <div className="mx-auto w-[min(1280px,94vw)] h-[calc(100svh-80px)] min-h-[550px] max-h-[850px] rounded-[24px] bg-[#FDFEFD] border border-[#DCE3E6] p-4 lg:p-6 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow duration-500 hover:shadow-[0_15px_40px_rgba(6,111,130,0.08)] overflow-hidden">

                {/* Header Section (Fixed at top) */}
                <div className="shrink-0 mb-4 lg:mb-5">
                    <SectionTitle
                        label="Industrial Applications"
                        title="Explore our biomass solutions across different industries"
                    />
                </div>

                {/* Main Content (50% / 50% Split View) - Shrinks and Grows vertically */}
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 w-full flex-1 min-h-0">

                    {/* Left Side: Large Image Box - Same Height/Width Container for ALL images */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F2F6F7]/80 border border-[#DCE3E6]/60 rounded-xl overflow-hidden shadow-inner shrink-0 lg:shrink h-full min-h-[220px]">
                        {/* object-contain ensures NO cuts, while parent guarantees exact same box size always */}
                        <img
                            key={`main-${activeItem.id}`}
                            src={activeItem.image}
                            alt={activeItem.title}
                            className="w-full h-full object-contain p-2 lg:p-4 transition-opacity duration-500"
                        />
                    </div>

                    {/* Right Side: Detail (50%) - Tightly spaced to never require a scrollbar */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center shrink min-h-0">
                        <div key={`detail-${activeItem.id}`} className="transition-opacity duration-500">

                            <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-[#F2F6F7] text-[#066F82] border-l-2 border-[#066F82] text-[10px] md:text-xs font-bold mb-2 uppercase tracking-wider">
                                APPLICATION {activeItem.id} OF {industrialApplicationsImages.length}
                            </span>

                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#354653] mb-2 lg:mb-3 leading-snug">
                                {activeItem.title}
                            </h3>

                            <p className="text-[#5B707E] text-sm lg:text-base mb-3 lg:mb-4 leading-relaxed line-clamp-3">
                                {activeItem.desc}
                            </p>

                            <div className="bg-[#F2F6F7]/80 p-3 lg:p-4 rounded-xl border border-[#DCE3E6] mb-4 lg:mb-5">
                                <ul className="space-y-2 lg:space-y-3">
                                    {[
                                        'Custom engineered for specific industry needs',
                                        'Delivering substantial savings on fuel operations',
                                        'Consistent heat output with robust material builds'
                                    ].map((point, idx) => (
                                        <li key={idx} className="flex items-start text-[#354653]">
                                            <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-[#066F82] mr-3 shrink-0 flex-none relative top-0.5" />
                                            <span className="text-xs lg:text-sm font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <MagneticLink
                                to="/contact"
                                variant="primary"
                                className="!px-5 !py-2.5 lg:!px-6 lg:!py-3 shadow-sm shadow-[#066F82]/10 inline-block w-fit text-xs lg:text-sm"
                            >
                                Discuss Your Requirement
                            </MagneticLink>
                        </div>
                    </div>
                </div>

                {/* Bottom Thumbnails - Grid explicitly fills space evenly and thinly */}
                <div className="shrink-0 mt-4 lg:mt-5 pt-4 lg:pt-5 border-t border-[#DCE3E6]">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 lg:gap-3">
                        {industrialApplicationsImages.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveIndex(index)}
                                className={`
                                    relative w-full h-12 sm:h-14 lg:h-20 rounded-lg overflow-hidden transition-all duration-300 border-[3px] box-border bg-[#F2F6F7]
                                    ${activeIndex === index ? 'border-[#066F82] shadow-[0_4px_12px_rgba(6,111,130,0.15)] z-10 scale-[1.03]' : 'border-transparent opacity-60 hover:opacity-100 hover:border-[#DCE3E6] grayscale-[10%] hover:grayscale-0'}
                                `}
                            >
                                {/* object-cover for thumbnails is standard, making them uniform strips */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
                                />
                                {activeIndex === index && (
                                    <div className="absolute inset-0 bg-[#066F82]/10 pointer-events-none"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

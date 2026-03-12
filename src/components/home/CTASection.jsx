import React from 'react';
import { Reveal } from '../common/Reveal';
import { MagneticLink } from '../common/MagneticLink';
import { SafeImage } from '../common/SafeImage';
import { contactInfo } from '../../data/siteData';
import ctaConsultation from '../../assets/images/cta_consultation.png';

export function CTASection({
    label = "Call to Action Section",
    title = "Reduce Your Fuel Cost Today",
    text = "Switch to Biomass Pellet Burner & Save Up to 50% Minimum.",
    image = ctaConsultation,
    primaryBtn = { text: "Contact Our Expert Team Now", to: `tel:${contactInfo.mobile}` },
    secondaryBtn = { text: "Request Free Consultation", to: `tel:${contactInfo.mobile}` }
}) {
    return (
        <section className="mx-auto my-12 w-[min(1280px,94vw)]">
            <div className="overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_15px_40px_rgba(6,111,130,0.08)]">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    {/* Content Side */}
                    <div className="flex flex-[1.2] flex-col justify-center p-7 md:p-10 lg:p-12">
                        <Reveal>
                            <span className="mb-3 inline-block text-[10px] font-bold tracking-[0.2em] text-[#078DA4] uppercase">
                                {label}
                            </span>
                            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#354653] md:text-3xl lg:text-[32px] lg:leading-[1.2]">
                                {title}
                            </h2>
                            <p className="mb-8 max-w-xl text-sm leading-relaxed text-[#5B707E] md:text-base">
                                {text}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <MagneticLink
                                    to={primaryBtn.to}
                                    variant="primary"
                                    className="!px-6 !py-3 shadow-md shadow-[#066F82]/10 !text-sm"
                                >
                                    {primaryBtn.text}
                                </MagneticLink>
                                <MagneticLink
                                    to={secondaryBtn.to}
                                    variant="ghost"
                                    className="!border-[#DCE3E6] !bg-transparent !text-[#354653] hover:!bg-[#F8FAFB] !px-6 !py-3 !text-sm"
                                >
                                    {secondaryBtn.text}
                                </MagneticLink>
                            </div>
                        </Reveal>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-[200px] sm:h-[280px] lg:h-[420px] lg:flex-1 overflow-hidden">
                        <SafeImage
                            src={image}
                            alt="Industrial Consultation"
                            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                        />
                        {/* Subtle refinement layer */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-white/10 pointer-events-none" />

                        {/* Status chip over image (optional touch of detail) */}
                        <div className="absolute top-5 right-5 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-[#066F82] backdrop-blur-sm shadow-sm select-none">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-[#078DA4] animate-pulse" />
                            EXPERT CONSULTATION AVAILABLE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

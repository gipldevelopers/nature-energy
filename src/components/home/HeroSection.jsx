import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { imageSet } from '../../data/siteData';
import { Reveal } from '../common/Reveal';
import { ParticleField } from '../common/ParticleField';
import { MagneticLink } from '../common/MagneticLink';
import { SafeImage } from '../common/SafeImage';
import { cardBase, fadeUp, stagger } from '../../constants/siteConstants';

const Motion = motion;

const features = [
    'Fully Automatic Operation',
    'Eco-Friendly & Pollution Control Friendly',
    'Low Maintenance',
    'Suitable for Multiple Industrial Applications',
];

export function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 90]);

    return (
        <section ref={ref} className="mx-auto mt-4 w-[min(1280px,94vw)] relative">
            <div className="relative h-[calc(100svh-104px)] min-h-[500px] max-h-[850px] overflow-hidden rounded-[24px] border border-[#DCE3E6]">
                <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={imageSet.heroBg}>
                    <source src="https://cdn.coverr.co/videos/coverr-industrial-heating-9710/1080p.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(53,70,83,0.9),rgba(6,111,130,0.66))]" />
                <div className="industrial-texture absolute inset-0" />
                <ParticleField />

                <div className="relative z-10 mx-auto grid h-full w-full grid-cols-1 items-center gap-6 px-6 py-4 md:px-10 xl:grid-cols-[1.1fr_0.9fr]">

                    {/* ── Left: Text Content ── */}
                    <Reveal>
                        {/* Badge */}
                        <span className="inline-flex rounded-full border border-[#DCE3E6]/30 bg-[#FDFEFD]/12 px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.12em] text-[#FDFEFD]">
                            India's Leading Industrial Pellet Burner Manufacturer
                        </span>

                        {/* H1 */}
                        <h1 className="mt-3 text-3xl font-bold leading-tight text-[#FDFEFD] md:text-4xl lg:text-5xl">
                            High Efficiency &bull; Low Fuel Cost &bull; Fully Automatic System
                        </h1>

                        {/* Description */}
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#FDFEFD]/90 md:text-base">
                            At <span className="font-semibold text-white">Nature Organic Energy</span>, we design and manufacture advanced{' '}
                            <span className="font-semibold text-white">Biomass Pellet Burners</span>{' '}
                            that reduce fuel costs by up to 40–50% compared to diesel and furnace oil systems.
                        </p>

                        {/* Feature checklist */}
                        <Motion.ul
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false }}
                            className="mt-5 flex flex-col gap-2"
                        >
                            {features.map((item) => (
                                <Motion.li key={item} variants={fadeUp} className="flex items-center gap-2 text-sm text-[#FDFEFD]/90">
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2BB673]/20 text-[#2BB673] font-bold text-xs">✓</span>
                                    {item}
                                </Motion.li>
                            ))}
                        </Motion.ul>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            <MagneticLink to="/contact#contact_form" variant="primary">
                                Get Free Quotation Today <ArrowRight size={15} />
                            </MagneticLink>
                            <MagneticLink to="/contact#contact_form" variant="ghost">
                                Request Consultation
                            </MagneticLink>
                        </div>
                    </Reveal>

                    {/* ── Right: Machine Image Card ── */}
                    <Motion.div style={{ y: parallaxY }} className="relative hidden xl:block self-center">
                        <div className={`relative p-5 ${cardBase} border-[#DCE3E6]/40 bg-[#FDFEFD]/18`}>
                            <SafeImage
                                src={imageSet.machine1}
                                alt="Industrial biomass pellet burner"
                                className="mx-auto h-[320px] lg:h-[350px] w-full object-contain"
                            />
                            {[
                                { label: 'Automatic Fuel Feeding', style: 'left-2 top-6' },
                                { label: 'High Efficiency Combustion', style: 'right-2 top-20' },
                                { label: 'Low Emission System', style: 'left-4 bottom-20' },
                                { label: 'Smart Control Panel', style: 'right-4 bottom-8' },
                            ].map((item) => (
                                <Motion.span
                                    key={item.label}
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                                    className={`absolute rounded-full border border-[#DCE3E6]/50 bg-[#FDFEFD]/85 px-3 py-1.5 text-[10px] md:text-xs font-medium text-[#354653] ${item.style}`}
                                >
                                    {item.label}
                                </Motion.span>
                            ))}
                        </div>
                    </Motion.div>

                </div>
            </div>
        </section>
    );
}

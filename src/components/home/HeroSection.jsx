import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { imageSet, trustStats } from '../../data/siteData';
import { Reveal } from '../common/Reveal';
import { ParticleField } from '../common/ParticleField';
import { MagneticLink } from '../common/MagneticLink';
import { SafeImage } from '../common/SafeImage';
import { stagger, fadeUp, cardBase } from '../../constants/siteConstants';

const Motion = motion;

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

                <div className="relative z-10 mx-auto grid h-full w-full grid-cols-1 items-center gap-6 px-6 py-4 md:px-10 xl:grid-cols-[1.06fr_0.94fr]">
                    <Reveal>
                        <span className="inline-flex rounded-full border border-[#DCE3E6]/30 bg-[#FDFEFD]/12 px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.12em] text-[#FDFEFD]">
                            Industrial Biomass Energy
                        </span>
                        <h1 className="mt-2 text-3xl font-semibold leading-[1.04] text-[#FDFEFD] md:text-5xl lg:text-[3.2rem]">
                            High Efficiency Biomass Pellet Burners for Industrial Heating
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#FDFEFD]/90 md:text-base lg:text-lg">
                            <span className="font-semibold text-white">Reduce Industrial Fuel Costs by up to 50%</span> with Advanced Biomass Energy Technology. Nature Energy designs and manufactures advanced pellet burner systems that replace traditional diesel and furnace oil.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <MagneticLink to="/contact" variant="primary">
                                Get Free Quote <ArrowRight size={15} />
                            </MagneticLink>
                            <MagneticLink to="/products" variant="ghost">
                                Explore Products
                            </MagneticLink>
                        </div>

                        <Motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false }}
                            className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4"
                        >
                            {trustStats.map((item) => (
                                <Motion.article
                                    key={item.label}
                                    variants={fadeUp}
                                    className="rounded-xl border border-[#DCE3E6]/35 bg-[#FDFEFD]/12 p-3 backdrop-blur-md"
                                >
                                    <p className="text-base font-semibold text-[#FDFEFD] md:text-lg">{item.value}</p>
                                    <p className="text-[10px] md:text-[11px] text-[#FDFEFD]/80 leading-tight">{item.label}</p>
                                </Motion.article>
                            ))}
                        </Motion.div>
                    </Reveal>

                    <Motion.div style={{ y: parallaxY }} className="relative hidden xl:block self-center">
                        <div className={`relative p-5 ${cardBase} border-[#DCE3E6]/40 bg-[#FDFEFD]/18`}>
                            <SafeImage
                                src={imageSet.machine1}
                                alt="Industrial biomass burner machine"
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

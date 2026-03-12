import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SafeImage } from '../common/SafeImage';
import { SectionTitle } from '../common/SectionTitle';
import { imageSet } from '../../data/siteData';

export function CommissioningGallery() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax movement for rows
    // Row 1 slides right-to-left, Row 2 slides left-to-right
    const xRow1 = useTransform(scrollYProgress, [0, 1], [100, -200]);
    const xRow2 = useTransform(scrollYProgress, [0, 1], [-200, 100]);

    const allImages = [
        { url: imageSet.factoryHall, title: 'Main Assembly Hall' },
        { url: imageSet.automation, title: 'Control Architecture' },
        { url: imageSet.machine1, title: 'Precision Assembly' },
        { url: imageSet.steelPlant, title: 'Heavy Duty Retrofit' },
        { url: imageSet.burnerMain, title: 'QC Testing Bay' },
        { url: imageSet.installSite, title: 'Final Commissioning' },
        { url: imageSet.boilerRoom, title: 'Pressure Mapping' },
        { url: imageSet.controlRoom, title: 'System Monitoring' },
        { url: imageSet.machine1Orig, title: 'Thermal Calibration' },
        { url: imageSet.boilerPlant, title: 'Boiler Integration' },
    ];

    const row1 = allImages.slice(0, 5);
    const row2 = allImages.slice(5, 10);

    return (
        <section ref={containerRef} className="bg-[#FDFEFD] py-10 md:py-16 overflow-hidden">
            <div className="mx-auto w-[min(1400px,94vw)] px-4 mb-8">
                <div className="text-center max-w-4xl mx-auto">
                    <SectionTitle
                        isCentered={true}
                        label="In Motion"
                        title="From Our Workshop to Your Site"
                    />
                </div>
            </div>

            {/* Parallax Image Grid - Compact Layout */}
            <div className="flex flex-col gap-4 md:gap-6 overflow-hidden">

                {/* Row 1: Moves Left on Scroll */}
                <div className="flex overflow-x-auto md:overflow-visible whitespace-nowrap scrollbar-hide touch-auto">
                    <motion.div
                        style={{ x: xRow1 }}
                        className="commissioning-row flex gap-4 md:gap-6 px-4 md:px-0"
                    >
                        {row1.map((image, idx) => (
                            <div
                                key={idx}
                                className="relative h-[160px] w-[240px] sm:h-[180px] sm:w-[280px] md:h-[220px] md:w-[380px] flex-shrink-0 overflow-hidden rounded-xl shadow-lg border border-[#DCE3E6] bg-white"
                            >
                                <SafeImage
                                    src={image.url}
                                    alt={image.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex flex-col justify-end p-5">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#66D9E8] mb-0.5">Workshop</p>
                                    <h4 className="text-xs font-bold text-white">{image.title}</h4>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Moves Right on Scroll */}
                <div className="flex overflow-x-auto md:overflow-visible whitespace-nowrap scrollbar-hide touch-auto">
                    <motion.div
                        style={{ x: xRow2 }}
                        className="commissioning-row flex gap-4 md:gap-6 px-4 md:px-0 md:ml-[-300px]"
                    >
                        {row2.map((image, idx) => (
                            <div
                                key={idx}
                                className="relative h-[160px] w-[240px] sm:h-[180px] sm:w-[280px] md:h-[220px] md:w-[380px] flex-shrink-0 overflow-hidden rounded-xl shadow-lg border border-[#DCE3E6] bg-white"
                            >
                                <SafeImage
                                    src={image.url}
                                    alt={image.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex flex-col justify-end p-5">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#66D9E8] mb-0.5">Integration</p>
                                    <h4 className="text-xs font-bold text-white">{image.title}</h4>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>

            {/* Custom Styles for scrollbar hide */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none; /* Chrome, Safari and Opera */
                }
            `}</style>
        </section>
    );
}

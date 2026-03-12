import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Layers } from 'lucide-react';

export function RefractoryEngineering() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
                <Reveal>
                    <SectionTitle label="Advanced Materials" title="High-Alumina Castable Refractories" />
                    <p className="mt-4 text-sm leading-relaxed text-[#5B707E] lg:text-lg">
                        Our chambers are lined with custom-developed refractory castables containing over 70% Alumina. This material creates a thermal flywheel—storing heat during peak operation and maintaining ignition temperatures even during modulation.
                    </p>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { title: '1450°C', subtitle: 'Service Limit' },
                            { title: 'Thermal Shock', subtitle: 'Resistant' },
                            { title: 'Erosion Prof', subtitle: 'Surface' },
                            { title: '24-Month', subtitle: 'Avg. Lifecycle' },
                        ].map((ft) => (
                            <div key={ft.title} className="rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] p-4 text-center">
                                <p className="text-sm font-bold text-[#078DA4]">{ft.title}</p>
                                <p className="text-[10px] uppercase font-bold text-[#5B707E] mt-1 tracking-tight">{ft.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
                <Reveal className="flex justify-center py-8">
                    <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] [perspective:1200px]">
                        {/* 3D Rotating Core Container */}
                        <motion.div
                            className="relative h-full w-full [transform-style:preserve-3d]"
                            animate={{
                                rotateY: 360,
                                rotateX: [0, 15, 0, -15, 0],
                            }}
                            transition={{
                                rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                                rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            {/* Inner Hot Core */}
                            <div className="absolute inset-0 flex items-center justify-center [transform:translateZ(0px)]">
                                <div className="h-48 w-48 rounded-full bg-[#078DA4] blur-[80px] opacity-40 animate-pulse" />
                                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#66D9E8] to-[#078DA4] shadow-[0_0_60px_rgba(7,141,164,0.7)]" />
                            </div>

                            {/* Floating Refractory Layers */}
                            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{
                                        transform: `rotateY(${deg}deg) translateZ(140px)`
                                    }}
                                >
                                    <div className="h-28 w-20 rounded-2xl border border-[#078DA4]/40 bg-white/20 backdrop-blur-md shadow-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(7,141,164,0.2) 100%)'
                                        }}
                                    />
                                </motion.div>
                            ))}

                            {/* Top & Bottom Support Rings */}
                            <div className="absolute inset-0 flex items-center justify-center [transform:rotateX(90deg) translateZ(100px)]">
                                <div className="h-64 w-64 rounded-full border-2 border-dashed border-[#078DA4]/30" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center [transform:rotateX(90deg) translateZ(-100px)]">
                                <div className="h-64 w-64 rounded-full border-2 border-dashed border-[#078DA4]/30" />
                            </div>
                        </motion.div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

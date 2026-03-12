import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { ArrowRight, PlayCircle, X, ExternalLink } from 'lucide-react';
import { imageSet } from '../../data/siteData';

const Motion = motion;

const videos = [
    {
        id: 'dQw4w9WgXcQ', // Replace with your actual YouTube video ID
        title: 'PLC Calibration Masterclass',
        desc: 'Step-by-step guide to setting burner temperature targets.',
        thumb: imageSet.machine1,
        duration: '12:45',
    },
    {
        id: 'ScMzIvxBSi4', // Replace with your actual YouTube video ID
        title: 'Hardware Retrofit Walkthrough',
        desc: 'Watch our team flange a burner to a 3-ton oil boiler.',
        thumb: imageSet.installSite,
        duration: '18:20',
    },
    {
        id: 'J---aiyznGQ', // Replace with your actual YouTube video ID
        title: 'Biomass Pellet Feeding System',
        desc: 'How the automatic screw feeder and hopper work in tandem.',
        thumb: imageSet.boilerRoom,
        duration: '9:55',
    },
];

export function VideoTutorials() {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <>
            <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <SectionTitle label="Watch & Learn" title="Technical Video Series" />
                    <a
                        href="https://www.youtube.com/@NatureEnergyIndia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-sm font-bold text-[#066F82] hover:text-[#078DA4] transition-colors"
                    >
                        View YouTube Channel <ArrowRight size={16} />
                    </a>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {videos.map((video, idx) => (
                        <Reveal key={video.id} className="group">
                            <div
                                onClick={() => setActiveVideo(video)}
                                className="relative block aspect-video overflow-hidden rounded-2xl bg-black cursor-pointer"
                            >
                                {/* Thumbnail */}
                                <SafeImage
                                    src={video.thumb}
                                    alt={video.title}
                                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-40"
                                />

                                {/* Duration badge */}
                                <span className="absolute top-3 right-3 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                                    {video.duration}
                                </span>

                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#078DA4] transition-all duration-300 group-hover:scale-110 shadow-lg shadow-black/30">
                                        <PlayCircle size={32} />
                                    </div>
                                </div>

                                {/* Title overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-10">
                                    <h4 className="text-sm font-bold text-white group-hover:text-[#66D9E8] transition-colors leading-tight">
                                        {video.title}
                                    </h4>
                                    <p className="mt-1 text-[11px] text-white/60 line-clamp-1">{video.desc}</p>
                                </div>
                            </div>

                            {/* Below card: Open popup + YouTube link */}
                            <div className="mt-2 flex items-center gap-3 px-1">
                                <button
                                    onClick={() => setActiveVideo(video)}
                                    className="flex flex-1 items-center gap-1.5 rounded-lg bg-[#078DA4]/10 px-3 py-2 text-xs font-bold text-[#066F82] hover:bg-[#078DA4]/20 transition-colors"
                                >
                                    <PlayCircle size={13} /> Watch Now
                                </button>
                                <a
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 rounded-lg border border-[#DCE3E6] px-3 py-2 text-xs font-bold text-[#5B707E] hover:border-[#078DA4] hover:text-[#066F82] transition-colors"
                                >
                                    <ExternalLink size={12} /> YouTube
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── Video Popup Modal ── */}
            <AnimatePresence>
                {activeVideo && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[300] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                        onClick={() => setActiveVideo(null)}
                    >
                        <Motion.div
                            initial={{ scale: 0.92, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.92, opacity: 0, y: 20 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#0d1a22] shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#66D9E8]">
                                        Technical Video
                                    </p>
                                    <h3 className="text-sm font-bold text-white">{activeVideo.title}</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/20 transition"
                                    >
                                        <ExternalLink size={12} /> Open YouTube
                                    </a>
                                    <button
                                        onClick={() => setActiveVideo(null)}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-red-500/80 transition"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* YouTube Embed */}
                            <div className="aspect-video w-full">
                                <iframe
                                    key={activeVideo.id}
                                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                                    title={activeVideo.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="h-full w-full"
                                />
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between px-5 py-3 border-t border-white/10">
                                <p className="text-xs text-white/50">{activeVideo.desc}</p>
                                <span className="text-[10px] font-bold text-[#66D9E8] uppercase tracking-widest">
                                    {activeVideo.duration}
                                </span>
                            </div>
                        </Motion.div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

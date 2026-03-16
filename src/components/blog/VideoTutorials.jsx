import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { ArrowRight, PlayCircle, ExternalLink, Youtube, X } from 'lucide-react';
import { blogAssets } from '../../data/siteData';

const Motion = motion;

const videos = [
    {
        id: 'vid1',
        title: 'Industrial Burner Maintenance',
        desc: 'Advanced maintenance protocols for heavy-duty pellet burners.',
        video: blogAssets.vid13,
        youtubeUrl: 'https://www.youtube.com/@NATUREORGANICENERGY',
        duration: '12:45',
    },
    {
        id: 'vid2',
        title: 'Project Commissioning',
        desc: 'Witnessing a 5-ton boiler conversion project in action.',
        video: blogAssets.vid14,
        youtubeUrl: 'https://www.youtube.com/@NATUREORGANICENERGY',
        duration: '18:20',
    },
    {
        id: 'vid3',
        title: 'Automation Technology',
        desc: 'Deep dive into our PLC control panels and remote monitoring.',
        video: blogAssets.vid17,
        youtubeUrl: 'https://www.youtube.com/@NATUREORGANICENERGY',
        duration: '09:55',
    },
];

export function VideoTutorials() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <SectionTitle label="Watch & Learn" title="Technical Video Series" />
                <a
                    href="https://www.youtube.com/@NATUREORGANICENERGY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-[#066F82] hover:text-[#078DA4] transition-colors"
                >
                    Official YouTube Channel <ArrowRight size={16} />
                </a>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {videos.map((video) => (
                    <Reveal key={video.id} className="group flex flex-col h-full uppercase">
                        <button
                            onClick={() => setSelectedVideo(video)}
                            className="relative block aspect-video overflow-hidden rounded-2xl bg-black shadow-lg text-left"
                        >
                            {/* Video Preview */}
                            <video
                                src={video.video}
                                className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />

                            {/* Play Overlay */}
                            <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#078DA4] text-white shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                                    <PlayCircle size={32} fill="currentColor" />
                                </div>
                            </div>

                            {/* Duration badge */}
                            <span className="absolute top-3 right-3 z-20 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                                {video.duration}
                            </span>

                            {/* Bottom Label Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 to-transparent p-5">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[9px] font-bold text-white backdrop-blur-md border border-white/10 mb-2">
                                    <Youtube size={10} className="text-red-500" /> Watch Inline
                                </span>
                                <h4 className="text-sm font-bold text-white transition-colors leading-tight">
                                    {video.title}
                                </h4>
                            </div>
                        </button>

                        <div className="mt-4 flex flex-col flex-1">
                            <p className="text-xs leading-relaxed text-[#5B707E] line-clamp-2">
                                {video.desc}
                            </p>
                            <div className="mt-auto pt-4 flex items-center justify-between">
                                <a
                                    href={video.youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-[#066F82] hover:text-[#078DA4] transition-colors"
                                >
                                    Open technical video <PlayCircle size={14} />
                                </a>
                                <a
                                    href={video.youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#9EABAE] hover:text-[#066F82] transition-colors"
                                    title="View on YouTube"
                                >
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <Motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d151a] p-4 md:p-10 backdrop-blur-xl"
                    >
                        {/* Perfect Floating Header */}
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-8 z-[10000]">
                            <button 
                                onClick={() => setSelectedVideo(null)}
                                className="group flex items-center gap-3 rounded-full bg-white text-[#354653] px-6 py-2.5 text-sm font-bold shadow-2xl transition hover:bg-[#078DA4] hover:text-white"
                            >
                                <ArrowRight size={18} className="rotate-180 transition-transform group-hover:-translate-x-1" />
                                Back to Blog
                            </button>
                            
                            <div className="hidden md:flex flex-col items-end">
                                <span className="rounded-full bg-[#2BB673]/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#2BB673]">Now Playing</span>
                                <p className="mt-1 text-base font-bold text-white mb-1">{selectedVideo.title}</p>
                            </div>

                            <button 
                                onClick={() => setSelectedVideo(null)}
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-red-500 transition shadow-xl"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Video Container - Structured for Maximum Visual Quality */}
                        <Motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video overflow-hidden rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5 bg-black"
                        >
                            <video 
                                src={selectedVideo.video} 
                                className="h-full w-full object-contain"
                                controls 
                                autoPlay
                                controlsList="nodownload"
                            />
                        </Motion.div>

                        {/* Mobile Title */}
                        <div className="mt-8 md:hidden text-center max-w-xs">
                            <h3 className="text-lg font-bold text-white">{selectedVideo.title}</h3>
                            <button 
                                onClick={() => setSelectedVideo(null)}
                                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#078DA4]"
                            >
                                <ArrowRight size={16} className="rotate-180" /> Close Player
                            </button>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}


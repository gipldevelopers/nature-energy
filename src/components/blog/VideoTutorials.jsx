import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { ArrowRight, PlayCircle, ExternalLink, Youtube } from 'lucide-react';
import { blogAssets } from '../../data/siteData';

const videos = [
    {
        id: 'vid1',
        title: 'Industrial Burner Maintenance',
        desc: 'Advanced maintenance protocols for heavy-duty pellet burners.',
        video: blogAssets.vid13,
        youtubeUrl: 'https://www.youtube.com/@NatureEnergyIndia',
        duration: '12:45',
    },
    {
        id: 'vid2',
        title: 'Project Commissioning',
        desc: 'Witnessing a 5-ton boiler conversion project in action.',
        video: blogAssets.vid14,
        youtubeUrl: 'https://www.youtube.com/@NatureEnergyIndia',
        duration: '18:20',
    },
    {
        id: 'vid3',
        title: 'Automation Technology',
        desc: 'Deep dive into our PLC control panels and remote monitoring.',
        video: blogAssets.vid17,
        youtubeUrl: 'https://www.youtube.com/@NatureEnergyIndia',
        duration: '09:55',
    },
];

export function VideoTutorials() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <SectionTitle label="Watch & Learn" title="Technical Video Series" />
                <a
                    href="https://www.youtube.com/@NatureEnergyIndia"
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
                        <a
                            href={video.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block aspect-video overflow-hidden rounded-2xl bg-black shadow-lg"
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

                            {/* Duration badge */}
                            <span className="absolute top-3 right-3 z-20 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                                {video.duration}
                            </span>

                            {/* Bottom Label Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 to-transparent p-5">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[9px] font-bold text-white backdrop-blur-md border border-white/10 mb-2">
                                    <Youtube size={10} className="text-red-500" /> YouTube Content
                                </span>
                                <h4 className="text-sm font-bold text-white transition-colors leading-tight">
                                    {video.title}
                                </h4>
                            </div>
                        </a>

                        {/* Card Footer */}
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
                                    Watch technical series <ExternalLink size={12} />
                                </a>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}


import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { imageSet } from '../../data/siteData';
import { cardBase } from '../../constants/siteConstants';

export function OurSolution() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
                <Reveal className={`${cardBase} relative overflow-hidden h-[240px] sm:h-[300px] lg:h-full lg:min-h-0`}>
                    <SafeImage src={imageSet.burnerMain} alt="Biomass burner technology" className="absolute inset-0 h-full w-full object-cover" />
                </Reveal>
                <Reveal className="flex flex-col justify-center">
                    <SectionTitle
                        label="Our Solution"
                        title="Biomass pellet burner technology for efficient industrial heat output"
                        text="Compressed agricultural waste pellets are automatically fed to a controlled combustion chamber to generate high-temperature heat for boilers, ovens, dryers, and process systems."
                    />
                    <ul className="mt-4 grid gap-3 text-sm text-[#5B707E] md:text-base">
                        {[
                            'Up to 50% reduction in fuel cost',
                            'Fully automatic fuel feeding system',
                            'High combustion efficiency',
                            'Low maintenance operation',
                            'Environment friendly renewable fuel',
                        ].map((item) => (
                            <li key={item} className="inline-flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-[#2BB673]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}

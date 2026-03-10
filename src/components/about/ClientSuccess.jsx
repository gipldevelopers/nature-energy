import React from 'react';
import { MapPin, Users } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { cardBase } from '../../constants/siteConstants';

export function ClientSuccess() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-2">
            <Reveal className={`${cardBase} p-6 md:p-8 lg:p-10 bg-[#FDFEFD]`}>
                <MapPin size={28} className="text-[#078DA4]" />
                <h3 className="mt-4 text-xl font-bold text-[#354653]">Pan-India Commissioning</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">
                    Our engineering crews travel factory to factory, ensuring each installation is seamlessly integrated into your existing boiler lines. We specialize in retrofitting legacy diesel ovens with zero production disruption.
                </p>
            </Reveal>
            <Reveal className={`${cardBase} p-6 md:p-8 lg:p-10 bg-[#FDFEFD]`}>
                <Users size={28} className="text-[#078DA4]" />
                <h3 className="mt-4 text-xl font-bold text-[#354653]">Dedicated Client Success</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">
                    Purchase is not the end; it's the beginning. Every client gets assigned a dedicated thermal engineer to assist with post-installation tweaking, operator training, and annual maintenance audits.
                </p>
            </Reveal>
        </section>
    );
}

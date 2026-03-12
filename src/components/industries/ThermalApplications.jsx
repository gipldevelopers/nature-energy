import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Factory } from 'lucide-react';

export function ThermalApplications() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#354653] text-white">
            <div className="grid md:grid-cols-[1fr_1.5fr]">
                <div className="flex flex-col justify-center border-b border-white/10 p-8 md:border-b-0 md:border-r">
                    <SectionTitle label="Applications" title="Equipment We Replace" isDark={true} />
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                        Our pellet burners are not just for boilers. The high heat, smokeless flame makes them the perfect hot-air generator for direct and indirect heating processes.
                    </p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-y divide-white/10">
                    {[
                        'High-Pressure Steam Boilers', 'Thermic Fluid Heaters',
                        'Rotary Drum Dryers', 'Bakery Tunnel Ovens',
                        'Metal Forging Furnaces', 'Chemical Hot Air Gens'
                    ].map((app, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-6 text-center">
                            <Factory size={24} className="text-[#66D9E8]" />
                            <p className="mt-3 text-sm font-bold text-white">{app}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

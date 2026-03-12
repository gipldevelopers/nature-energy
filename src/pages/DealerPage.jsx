import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { Reveal } from '../components/common/Reveal';
import { CheckCircle2, Handshake, TrendingUp, Presentation, Wrench } from 'lucide-react';
import { imageSet } from '../data/siteData';

export default function DealerPage() {
    const benefits = [
        { title: 'Attractive Margin', icon: TrendingUp },
        { title: 'Marketing Support', icon: Presentation },
        { title: 'Technical Training', icon: Wrench },
        { title: 'Spare Parts Support', icon: Handshake },
    ];

    return (
        <main className="pb-12">
            <PageHero
                label="Dealer / Distributor Page"
                title="Become Our Dealer"
                subtitle="We are expanding our dealer network across India. Partner with us to deliver eco-friendly and high-efficiency heating solutions to industries everywhere."
                image={imageSet.factoryHall}
            />

            <section className="mx-auto mt-12 w-[min(1280px,94vw)] max-w-4xl">
                <Reveal className="rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-8 md:p-12 shadow-sm">
                    <SectionTitle 
                        label="Partnership" 
                        title="Benefits of Partnering with Nature Organic Energy" 
                    />
                    
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-4 rounded-xl border border-[#DCE3E6]/60 bg-[#F2F6F7] p-5">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#078DA4]/10">
                                    <benefit.icon size={24} className="text-[#078DA4]" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-bold text-[#354653] flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-[#2BB673]" /> {benefit.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-xl bg-gradient-to-r from-[#078DA4]/10 to-[#066F82]/5 p-6 border border-[#078DA4]/20 text-center">
                        <p className="text-[#354653] font-semibold">
                            Ready to take the next step? Contact our expert team today to discuss the dealership process and secure your region.
                        </p>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}

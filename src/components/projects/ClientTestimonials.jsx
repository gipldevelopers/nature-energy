import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Quote } from 'lucide-react';

export function ClientTestimonials() {
    const reviews = [
        {
            text: "Switching from furnace oil was a big decision, but the Nature Energy team handled everything. We saw savings from the very first month.",
            author: "Plant Director",
            company: "Apex Chemicals"
        },
        {
            text: "The stability of the flame is what impressed our technical team. It performs better than our previous Italian gas burner.",
            author: "Chief Engineer",
            company: "Indo Fabricators"
        }
    ];

    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-2">
            {reviews.map((r) => (
                <Reveal key={r.company} className="rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7]/50 p-8 md:p-12 relative overflow-hidden">
                    <Quote className="absolute -right-4 -top-4 h-32 w-32 text-[#078DA4]/5" />
                    <p className="text-sm md:text-lg italic text-[#5B707E] leading-relaxed">"{r.text}"</p>
                    <div className="mt-6">
                        <p className="font-bold text-[#354653]">{r.author}</p>
                        <p className="text-xs text-[#078DA4] font-bold uppercase tracking-widest">{r.company}</p>
                    </div>
                </Reveal>
            ))}
        </section>
    );
}

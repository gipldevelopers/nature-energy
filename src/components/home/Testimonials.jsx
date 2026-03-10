import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { cardBase } from '../../constants/siteConstants';

export function Testimonials() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
            <SectionTitle label="Testimonials" title="What industrial clients say after conversion" />
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {[
                    'After installing the Nature Energy pellet burner system, our textile factory reduced fuel costs by nearly 45 percent while maintaining consistent heating output.',
                    'The retrofit was smooth, operation is automatic, and the monthly diesel expense reduction has significantly improved our plant utility cost control.',
                ].map((quote) => (
                    <Reveal key={quote} className={`${cardBase} p-6`}>
                        <p className="text-lg leading-relaxed text-[#354653]">"{quote}"</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

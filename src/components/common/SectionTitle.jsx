import React from 'react';
import { Reveal } from './Reveal';

export function SectionTitle({ label, title, text, isDark = false, noReveal = false, isCentered = false }) {
    const Content = () => (
        <div className={`flex flex-col ${isCentered ? 'items-center text-center' : 'items-start text-left'}`}>
            {label ? (
                <span className={`inline-flex rounded-full border border-[#DCE3E6] px-3 py-1 text-xs uppercase tracking-[0.12em] ${isDark ? 'bg-white/10 text-white border-white/20' : 'bg-[#F2F6F7] text-[#066F82]'}`}>
                    {label}
                </span>
            ) : null}
            <h2 className={`mt-3 text-3xl font-semibold leading-tight md:text-4xl ${isDark ? 'text-white' : 'text-[#354653]'}`}>{title}</h2>
            {text ? <p className={`mt-3 text-base leading-relaxed md:text-lg ${isDark ? 'text-white' : 'text-[#5B707E]'}`}>{text}</p> : null}
        </div>
    );

    if (noReveal) {
        return <div className={`max-w-4xl ${isCentered ? 'mx-auto' : ''}`}><Content /></div>;
    }

    return (
        <Reveal className={`max-w-4xl ${isCentered ? 'mx-auto' : ''}`}>
            <Content />
        </Reveal>
    );
}

import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Mail, ArrowRight } from 'lucide-react';

export function BlogNewsletter() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#354653] p-8 md:p-14 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />

            <div className="grid gap-12 lg:grid-cols-2 items-center">
                <Reveal>
                    <SectionTitle isDark={true} label="Stay Updated" title="Join our Weekly Industrial Insight Newsletter" />
                    <p className="mt-4 text-sm opacity-70">
                        Get the latest news on fuel prices, thermal efficiency benchmarks, and new government environmental norms delivered to your inbox.
                    </p>
                </Reveal>
                <Reveal className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                    <form className="flex flex-col gap-4 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Engineering Email Address"
                            className="flex-1 rounded-xl bg-white/10 px-5 py-3.5 text-sm font-medium text-white placeholder:text-white/40 focus:bg-white/20 focus:outline-none"
                        />
                        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#66D9E8] px-8 py-3.5 text-sm font-bold text-[#066F82] transition hover:bg-white">
                            Subscribe <ArrowRight size={16} />
                        </button>
                    </form>
                    <p className="mt-4 text-[10px] text-white/40">Zero spam. Only technical insights. Unsubscribe and time.</p>
                </Reveal>
            </div>
        </section>
    );
}

import React from 'react';
import { Leaf } from 'lucide-react';

export function PCBCompliance() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 lg:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-[#DCE3E6] bg-[#F2F6F7] p-8">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#354653]">Pollution Control Board Approved</h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">
                        As environmental norms strictly crack down on furnace oil and coal systems across industrial zones, Nature Energy's biomass stack is listed as an approved, green-category renewable heating source.
                    </p>
                </div>
                <div className="flex-none">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#DCE3E6] bg-white shadow-md">
                        <Leaf size={40} className="text-[#2BB673]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

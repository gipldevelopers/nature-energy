import React from 'react';
import { SectionTitle } from '../common/SectionTitle';

export function SizingGuide() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-10">
            <SectionTitle label="Sizing Guide" title="How to choose the correct burner capacity" />
            <div className="mt-6 overflow-x-auto rounded-xl border border-[#DCE3E6] shadow-sm">
                <table className="w-full min-w-[600px] text-left text-sm">
                    <thead className="bg-[#F2F6F7] text-[#354653]">
                        <tr>
                            <th className="p-4 font-bold border-b border-[#DCE3E6]">Recommended For</th>
                            <th className="p-4 font-bold border-b border-[#DCE3E6]">Equivalent Diesel Use</th>
                            <th className="p-4 font-bold border-b border-[#DCE3E6]">Estimated Burner Size</th>
                            <th className="p-4 font-bold border-b border-[#DCE3E6]">Target Industry</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DCE3E6] text-[#5B707E]">
                        <tr>
                            <td className="p-4 pl-4 font-semibold text-[#066F82]">Bakery Ovens / Roasters</td>
                            <td className="p-4">10 - 25 Litres/Hour</td>
                            <td className="p-4">50,000 - 2,00,000 Kcal/hr</td>
                            <td className="p-4">Food Processing</td>
                        </tr>
                        <tr>
                            <td className="p-4 pl-4 font-semibold text-[#066F82]">Small Boilers / Dryers</td>
                            <td className="p-4">30 - 60 Litres/Hour</td>
                            <td className="p-4">3,00,000 - 6,00,000 Kcal/hr</td>
                            <td className="p-4">Textile / Pharm</td>
                        </tr>
                        <tr>
                            <td className="p-4 pl-4 font-semibold text-[#066F82]">Industrial Hot Air Gen.</td>
                            <td className="p-4">70 - 120 Litres/Hour</td>
                            <td className="p-4">8,00,000 - 12,00,000 Kcal/hr</td>
                            <td className="p-4">Chemical / Paper</td>
                        </tr>
                        <tr>
                            <td className="p-4 pl-4 font-semibold text-[#066F82]">Heavy Steam Boilers</td>
                            <td className="p-4">150+ Litres/Hour</td>
                            <td className="p-4">15,00,000+ Kcal/hr</td>
                            <td className="p-4">Heavy Manufacturing</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

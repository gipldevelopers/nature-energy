import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { useCountUp } from '../../hooks/useCountUp';
import { formatINR } from '../../utils/format';
import { fuelFactor, sizeFactor, loadFactor, cardBase } from '../../constants/siteConstants';

export function FuelSavingsCalculator() {
    const [fuel, setFuel] = useState('diesel');
    const [cost, setCost] = useState(100000);
    const [size, setSize] = useState('medium');
    const [load, setLoad] = useState('continuous');

    const monthlySaving = useMemo(
        () => Math.max(18000, Math.round(cost * fuelFactor[fuel] * sizeFactor[size] * loadFactor[load])),
        [fuel, cost, size, load],
    );

    const yearlySaving = monthlySaving * 12;
    const monthlyAnimated = useCountUp(monthlySaving, 900);
    const yearlyAnimated = useCountUp(yearlySaving, 1000);

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
            <SectionTitle
                label="Fuel Cost Saving"
                title="Interactive industrial fuel savings calculator"
                text="Estimate monthly and yearly savings by switching from diesel/furnace/gas burners to biomass pellet systems."
            />
            <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className={`${cardBase} p-5`}>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <label className="text-sm text-[#354653]">
                            Current Fuel Type
                            <select value={fuel} onChange={(event) => setFuel(event.target.value)} className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#FDFEFD] px-3 py-2 text-sm text-[#354653]">
                                <option value="diesel">Diesel Burner</option>
                                <option value="furnace">Furnace Oil Burner</option>
                                <option value="gas">Gas Burner</option>
                            </select>
                        </label>
                        <label className="text-sm text-[#354653]">
                            Monthly Fuel Cost
                            <input type="number" min="10000" value={cost} onChange={(event) => setCost(Number(event.target.value) || 10000)} className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#FDFEFD] px-3 py-2 text-sm text-[#354653]" />
                        </label>
                        <label className="text-sm text-[#354653]">
                            Factory Size
                            <select value={size} onChange={(event) => setSize(event.target.value)} className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#FDFEFD] px-3 py-2 text-sm text-[#354653]">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </label>
                        <label className="text-sm text-[#354653]">
                            Heating Requirement
                            <select value={load} onChange={(event) => setLoad(event.target.value)} className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#FDFEFD] px-3 py-2 text-sm text-[#354653]">
                                <option value="shift">Single Shift</option>
                                <option value="extended">Extended Shift</option>
                                <option value="continuous">24x7 Continuous</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className={`${cardBase} p-5`}>
                    <p className="text-sm text-[#5B707E]">Estimated Monthly Saving</p>
                    <h3 className="mt-2 text-4xl font-semibold text-[#066F82]">{formatINR(monthlyAnimated)}</h3>
                    <p className="mt-4 text-sm text-[#5B707E]">Estimated Yearly Saving</p>
                    <h4 className="mt-2 text-3xl font-semibold text-[#2BB673]">{formatINR(yearlyAnimated)}</h4>
                    <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">
                        Savings are indicative and can be validated with a detailed thermal and fuel study by our engineering team.
                    </p>
                </div>
            </div>
        </section>
    );
}

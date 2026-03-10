import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { CombustionScience } from '../components/technology/CombustionScience';
import { AirControlVFD } from '../components/technology/AirControlVFD';
import { DualStageCombustion } from '../components/technology/DualStageCombustion';
import { RefractoryEngineering } from '../components/technology/RefractoryEngineering';
import { SmartPLC } from '../components/technology/SmartPLC';
import { TripleSafety } from '../components/technology/TripleSafety';
import { FuelVersatility } from '../components/technology/FuelVersatility';
import { EfficiencyROI } from '../components/technology/EfficiencyROI';
import { EmissionsTech } from '../components/technology/EmissionsTech';
import { FutureIoT } from '../components/technology/FutureIoT';
import { imageSet } from '../data/siteData';
import { Reveal } from '../components/common/Reveal';
import { Link } from 'react-router-dom';
import { CTASection } from '../components/home/CTASection';

export default function TechnologyPage() {
    return (
        <main className="pb-12">
            {/* 1. Hero */}
            <PageHero
                label="Core Technology"
                title="Industrial Bio-Thermal Engineering Redefined"
                subtitle="From dual-stage air mapping to custom refractory castables, Nature Energy burners represent the pinnacle of biomass combustion science."
                image={imageSet.machine1}
            />

            <CombustionScience />
            <AirControlVFD />
            <DualStageCombustion />
            <RefractoryEngineering />
            <SmartPLC />
            <TripleSafety />
            <FuelVersatility />
            <EfficiencyROI />
            <EmissionsTech />
            <FutureIoT />

            <CTASection
                label="Core Technology"
                title="Ready for a Technical Upgrade?"
                text="Our engineering team can perform a detailed thermal audit of your existing burner system and provide a step-by-step upgrade roadmap."
                image={imageSet.machine1}
                primaryBtn={{ text: "Consult An Engineer", to: "/contact" }}
                secondaryBtn={{ text: "Explore Systems", to: "/products" }}
            />
        </main>
    );
}

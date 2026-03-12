import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { IndustryChallenge } from '../components/industries/IndustryChallenge';
import { ThePivot } from '../components/industries/ThePivot';
import { SectorMatrix } from '../components/industries/SectorMatrix';
import { ThermalApplications } from '../components/industries/ThermalApplications';
import { CapacityMapping } from '../components/industries/CapacityMapping';
import { RobustEngineering } from '../components/industries/RobustEngineering';
import { ImpactHighlight } from '../components/industries/ImpactHighlight';
import { RapidDeployment } from '../components/industries/RapidDeployment';
import { PCBCompliance } from '../components/industries/PCBCompliance';
import { imageSet } from '../data/siteData';
import { ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/common/Reveal';
import { CTASection } from '../components/home/CTASection';

export default function IndustriesPage() {
    return (
        <main className="pb-12">
            {/* SECTION 1: Hero */}
            <PageHero
                label="Industries & Applications"
                title="Industrial Biomass Heat Built for the Hardest Operating Environments"
                subtitle="Nature Organic Energy systems operate seamlessly in critical 24/7 manufacturing plants across textiles, chemicals, agro-processing, and heavy engineering, lowering diesel/gas costs dramatically."
                image={imageSet.steelPlant}
            />

            <IndustryChallenge />
            <ThePivot />
            <SectorMatrix />
            <ThermalApplications />
            <CapacityMapping />
            <RobustEngineering />
            <ImpactHighlight />
            <RapidDeployment />
            <PCBCompliance />

            <CTASection
                label="Industries & Applications"
                title="Is your industry ready for cheaper heat?"
                text="Stop lighting your profits on fire with expensive diesel bills. Contact Nature Organic Energy for a comprehensive factory audit."
                image={imageSet.steelPlant}
                primaryBtn={{ text: "Schedule Technical Audit", to: "/contact" }}
                secondaryBtn={{ text: "Learn More", to: "/about" }}
            />
        </main>
    );
}

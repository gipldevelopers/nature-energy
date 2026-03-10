import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { CompanyOverview } from '../components/about/CompanyOverview';
import { MissionVision } from '../components/about/MissionVision';
import { NationalFootprint } from '../components/about/NationalFootprint';
import { CoreStrengths } from '../components/about/CoreStrengths';
import { ManufacturingProcess } from '../components/about/ManufacturingProcess';
import { QualityAssurance } from '../components/about/QualityAssurance';
import { ResearchAndDevelopment } from '../components/about/ResearchAndDevelopment';
import { Decarbonisation } from '../components/about/Decarbonisation';
import { ClientSuccess } from '../components/about/ClientSuccess';
import { imageSet } from '../data/siteData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/common/Reveal';
import { CTASection } from '../components/home/CTASection';

export default function AboutPage() {
    return (
        <main className="pb-12">
            {/* SECTION 1: Page Hero */}
            <PageHero
                label="About Our Company"
                title="Engineering the future of sustainable industrial heating"
                subtitle="A premier manufacturer of advanced biomass pellet burner systems, committed to replacing expensive fossil fuels with highly efficient, automated thermal technology."
                image={imageSet.factoryHall}
            />

            <CompanyOverview />
            <MissionVision />
            <NationalFootprint />
            <CoreStrengths />
            <ManufacturingProcess />
            <QualityAssurance />
            <ResearchAndDevelopment />
            <Decarbonisation />
            <ClientSuccess />

            <CTASection
                label="About Our Company"
                title="Ready to Upgrade Your Plant?"
                text="Join hundreds of Indian manufacturers who have permanently dropped their fuel bills. Let our experts run a free thermal ROI audit for your boiler system today."
                primaryBtn={{ text: "Talk To Our Engineers", to: "/contact" }}
                secondaryBtn={{ text: "Explore Our Burners", to: "/products" }}
            />
        </main>
    );
}

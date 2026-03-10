import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { DesignPhilosophy } from '../components/products/DesignPhilosophy';
import { ProductPortfolio } from '../components/products/ProductPortfolio';
import { TechnologyFeatures } from '../components/products/TechnologyFeatures';
import { PLCAutomation } from '../components/products/PLCAutomation';
import { ComponentBreakdown } from '../components/products/ComponentBreakdown';
import { FuelCapability } from '../components/products/FuelCapability';
import { SizingGuide } from '../components/products/SizingGuide';
import { SafetyStandards } from '../components/products/SafetyStandards';
import { InstallationRetrofitting } from '../components/products/InstallationRetrofitting';
import { imageSet } from '../data/siteData';
import { ArrowRight, BatteryCharging } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/common/Reveal';
import { CTASection } from '../components/home/CTASection';

export default function ProductsPage() {
    return (
        <main className="pb-12">
            {/* SECTION 1: Hero */}
            <PageHero
                label="Industrial Burners"
                title="Premium biomass pellet burner systems for diverse thermal loads"
                subtitle="Engineered for reliability. Nature Energy burners effortlessly replace diesel and gas systems to cut costs by 50% without compromising on heat output."
                image={imageSet.burnerMain}
            />

            <DesignPhilosophy />
            <ProductPortfolio />
            <TechnologyFeatures />
            <PLCAutomation />
            <ComponentBreakdown />
            <FuelCapability />
            <SizingGuide />
            <SafetyStandards />
            <InstallationRetrofitting />

            <CTASection
                label="Industrial Burners"
                title="Ready to specify a burner?"
                text="Our engineering team is ready to analyze your current fuel consumption and calculate the exact payback period for a new Nature Energy pellet burner."
                image={imageSet.burnerMain}
                primaryBtn={{ text: "Get A Custom Quote", to: "/contact" }}
                secondaryBtn={{ text: "View Details", to: "/products" }}
            />
        </main>
    );
}

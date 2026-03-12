import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroSection } from '../components/home/HeroSection';
import { IndustryProblem } from '../components/home/IndustryProblem';
import { OurSolution } from '../components/home/OurSolution';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { IndustriesServed } from '../components/home/IndustriesServed';
import { FuelSavingsCalculator } from '../components/home/FuelSavingsCalculator';
import { HowItWorks } from '../components/home/HowItWorks';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProjectInstallations } from '../components/home/ProjectInstallations';
import { Testimonials } from '../components/home/Testimonials';
import { CTASection } from '../components/home/CTASection';
import { BeforeAfterComparison } from '../components/home/BeforeAfterComparison';

export default function HomePage() {
    return (
        <main className="pb-8">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nature Energy | Industrial Biomass Pellet Burners</title>
                <meta name="description" content="Nature Energy provides high-efficiency industrial biomass pellet burners and reliable thermal heating solutions that reduce fuel costs by up to 50%." />
                <meta name="keywords" content="Industrial Pellet Burner Manufacturer India, Biomass Pellet Burner Supplier, Pellet Burner for Boiler, Bakery Oven Pellet Burner, Eco-Friendly Heating System" />
                <link rel="canonical" href="https://natureenergy.in/" />
            </Helmet>
            <HeroSection />
            <IndustryProblem />
            <OurSolution />
            <ProductShowcase />
            <IndustriesServed />
            <FuelSavingsCalculator />
            <HowItWorks />
            <WhyChooseUs />
            <ProjectInstallations />
            <Testimonials />
            <CTASection />
            <BeforeAfterComparison />
        </main>
    );
}

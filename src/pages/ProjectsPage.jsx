import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { NationalMap } from '../components/projects/NationalMap';
import { ImpactStatistics } from '../components/projects/ImpactStatistics';
import { IndustryInstallations } from '../components/projects/IndustryInstallations';
import { CaseStudyOne } from '../components/projects/CaseStudyOne';
import { CaseStudyTwo } from '../components/projects/CaseStudyTwo';
import { CapacityHighlights } from '../components/projects/CapacityHighlights';
import { ProjectLifecycle } from '../components/projects/ProjectLifecycle';
import { CommissioningGallery } from '../components/projects/CommissioningGallery';
import { ClientTestimonials } from '../components/projects/ClientTestimonials';
import { imageSet } from '../data/siteData';
import { Reveal } from '../components/common/Reveal';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '../components/home/CTASection';

export default function ProjectsPage() {
    return (
        <main className="pb-12">
            <PageHero
                label="Our Projects"
                title="Industrial Success Stories Across India"
                subtitle="From textile clusters to food processing plants, Nature Energy has transformed fuel-heavy factories into green-energy cost-saving leaders."
                image={imageSet.factoryHall}
            />

            <NationalMap />
            <ImpactStatistics />
            <IndustryInstallations />
            <CaseStudyOne />
            <CaseStudyTwo />
            <CapacityHighlights />
            <ProjectLifecycle />
            <CommissioningGallery />
            <ClientTestimonials />

            <CTASection
                label="Our Projects"
                title="Ready for a Site Visit?"
                text="We can arrange a visit for your technical team to a live Nature Energy installation near your location. See the savings and performance yourself."
                image={imageSet.boilerRoom}
                primaryBtn={{ text: "Book A Site Visit", to: "/contact" }}
                secondaryBtn={{ text: "Our Technology", to: "/technology" }}
            />
        </main>
    );
}

import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { FeaturedPost } from '../components/blog/FeaturedPost';
import { QuickTips } from '../components/blog/QuickTips';
import { RecentGrid } from '../components/blog/RecentGrid';
import { BlogNewsletter } from '../components/blog/BlogNewsletter';
import { Categories } from '../components/blog/Categories';
import { VideoTutorials } from '../components/blog/VideoTutorials';
import { ExpertSeries } from '../components/blog/ExpertSeries';
import { TechResources } from '../components/blog/TechResources';
import { BlogTags } from '../components/blog/BlogTags';
import { imageSet } from '../data/siteData';
import { Reveal } from '../components/common/Reveal';
import { Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '../components/home/CTASection';

export default function BlogPage() {
    return (
        <main className="pb-12">
            <PageHero
                label="Engineering Blog"
                title="Industrial Insights & Thermal Science"
                subtitle="The latest updates on biomass technology, operational tips, and fuel price analysis for modern Indian manufacturing."
                image={imageSet.burnerMain}
            />

            <FeaturedPost />
            <QuickTips />
            <RecentGrid />
            <BlogNewsletter />
            <Categories />
            <VideoTutorials />
            <ExpertSeries />
            <TechResources />
            <BlogTags />

            <CTASection
                label="Engineering Blog"
                title="Stay Ahead of the Curve"
                text="Join 2,000+ factory owners and utility engineers receiving our weekly technical digests on biomass technology."
                image={imageSet.burnerMain}
                primaryBtn={{ text: "Talk To Our Experts", to: "/contact" }}
                secondaryBtn={{ text: "Read More Articles", to: "/blog" }}
            />
        </main>
    );
}

import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { ContactBento } from '../components/contact/ContactBento';
import { LeadFormMap } from '../components/contact/LeadFormMap';
import { SupportGuarantees } from '../components/contact/SupportGuarantees';
import { FAQ } from '../components/contact/FAQ';
import { NationalNetworkFooter } from '../components/contact/NationalNetworkFooter';
import { imageSet } from '../data/siteData';

export default function ContactPage() {
    return (
        <main className="pb-12">
            {/* SECTION 1: Hero */}
            <PageHero
                label="Contact Us"
                title="Speak to a thermal engineering expert today"
                subtitle="Whether you need a custom burner quote, a fuel capacity audit, or immediately dispatched spare parts, the Nature Energy team is ready to assist your factory."
                image={imageSet.installSite}
            />

            <ContactBento />
            <LeadFormMap />
            <SupportGuarantees />
            <FAQ />
            <NationalNetworkFooter />

            {/* Buffer at bottom */}
            <div className="mt-6" />
        </main>
    );
}

import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { imageSet } from '../data/siteData';

export default function TermsConditionsPage() {
    return (
        <main className="pb-8">
            <PageHero
                label="Legal"
                title="Terms & Conditions"
                subtitle="The terms governing your use of Nature Organic Energy services."
                image={imageSet.boilerRoom}
            />

            <section className="mx-auto mt-6 w-[min(980px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
                <div className="prose prose-[#354653] max-w-none space-y-6">
                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">1. Acceptance of Terms</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            By accessing or using our website and services, you affirm that you are of legal age to enter into these Terms, and you legally bind yourself to these terms. If you disagree with any part of the terms then you may not access the Service.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">2. Description of Service</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            Nature Organic Energy provides information and services related to smart biomass energy systems, including legacy burner conversion, energy consulting, and related products (the "Service"). We reserve the right to either modify or discontinue the Service, including any of the website's features, at any time with or without notice to you.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">3. Use of the Site</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            Subject to these terms, Nature Organic Energy grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use. You agree not to:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-[#5B707E] text-sm space-y-1">
                            <li>Reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service.</li>
                            <li>Upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service.</li>
                            <li>Collect or track the personal information of others.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">4. Intellectual Property</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            The Service and its original content, features and functionality are and will remain the exclusive property of Nature Organic Energy and its licensors. The Service is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Nature Organic Energy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">5. Links To Other Web Sites</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            Our Service may contain links to third-party web sites or services that are not owned or controlled by Nature Organic Energy. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Nature Organic Energy shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">6. Limitation of Liability</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            In no event shall Nature Organic Energy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

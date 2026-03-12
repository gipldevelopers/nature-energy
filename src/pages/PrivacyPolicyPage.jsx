import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { imageSet } from '../data/siteData';

export default function PrivacyPolicyPage() {
    return (
        <main className="pb-8">
            <PageHero
                label="Legal"
                title="Privacy Policy"
                subtitle="How we handle and protect your information at Nature Organic Energy."
                image={imageSet.boilerPlant}
            />

            <section className="mx-auto mt-6 w-[min(980px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
                <div className="prose prose-[#354653] max-w-none space-y-6">
                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">1. Introduction</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            At Nature Organic Energy, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">2. Information We Collect</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            We collect several types of information from and about users of our Website, including information:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-[#5B707E] text-sm space-y-1">
                            <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, and any other identifier by which you may be contacted online or offline ("personal information").</li>
                            <li>That is about you but individually does not identify you.</li>
                            <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">3. How We Use Your Information</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            We use information that we collect about you or that you provide to us, including any personal information:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-[#5B707E] text-sm space-y-1">
                            <li>To present our Website and its contents to you.</li>
                            <li>To provide you with information, products, or services that you request from us.</li>
                            <li>To fulfill any other purpose for which you provide it.</li>
                            <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
                            <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">4. Disclosure of Your Information</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-[#5B707E] text-sm space-y-1">
                            <li>To our subsidiaries and affiliates.</li>
                            <li>To contractors, service providers, and other third parties we use to support our business.</li>
                            <li>To fulfill the purpose for which you provide it.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">5. Data Security</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#354653] mb-3">6. Changes to Our Privacy Policy</h2>
                        <p className="text-[#5B707E] leading-relaxed text-sm">
                            It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

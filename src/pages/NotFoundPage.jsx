import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/common/Reveal';
import { cardBase } from '../constants/siteConstants';

export default function NotFoundPage() {
    return (
        <main className="mx-auto w-[min(880px,94vw)] pb-8 pt-28">
            <Reveal className={`${cardBase} p-10 text-center`}>
                <h2 className="text-3xl font-semibold text-[#354653]">Page Not Found</h2>
                <p className="mt-3 text-[#5B707E]">The page you requested is not available.</p>
                <Link to="/" className="mt-5 inline-flex rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-3 text-sm font-semibold text-[#FDFEFD]">
                    Back to Home
                </Link>
            </Reveal>
        </main>
    );
}

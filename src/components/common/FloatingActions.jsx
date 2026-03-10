import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, MessageCircle } from 'lucide-react';

export function FloatingActions() {
    return (
        <div className="fixed bottom-5 right-4 z-[130] flex flex-col items-end gap-3">
            <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#078DA4] bg-[#078DA4] px-4 py-3 text-sm font-semibold text-[#FDFEFD] shadow-[0_14px_28px_rgba(6,111,130,0.28)]"
            >
                <Calculator size={16} />
                Get Quote
            </Link>
            <a
                href="https://wa.me/919800000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#2BB673] bg-[#2BB673] px-4 py-3 text-sm font-semibold text-[#FDFEFD] shadow-[0_14px_28px_rgba(43,182,115,0.28)]"
            >
                <MessageCircle size={16} />
                WhatsApp
            </a>
        </div>
    );
}

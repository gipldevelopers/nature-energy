import { useLocation, Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';
import { WhatsAppChat } from './WhatsAppChat';

export function FloatingActions() {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/' && (
                <div className="fixed bottom-24 right-4 z-[130] flex flex-col items-end gap-3 transition-opacity duration-300">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-[#078DA4] bg-[#078DA4] px-4 py-3 text-sm font-semibold text-[#FDFEFD] shadow-[0_14px_28px_rgba(6,111,130,0.28)] hover:bg-[#066F82] transition-colors"
                    >
                        <Calculator size={16} />
                        Get Quote
                    </Link>
                </div>
            )}
            <WhatsAppChat />
        </>
    );
}

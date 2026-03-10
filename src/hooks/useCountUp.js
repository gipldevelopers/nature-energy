import React, { useEffect, useState } from 'react';

export function useCountUp(target, duration = 1200) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let raf = 0;
        let start = 0;

        const tick = (time) => {
            if (!start) {
                start = time;
            }
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) {
                raf = requestAnimationFrame(tick);
            }
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [duration, target]);

    return value;
}

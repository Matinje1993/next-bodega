'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyLoadComponentProps {
    importFunc: () => Promise<{ default: React.ComponentType<any> }>;
    componentProps?: Record<string, any>;
    rootMargin?: string;
    threshold?: number;
}

export default function LazyLoadComponent({
    importFunc,
    componentProps = {},
    rootMargin = '100px', // load just before it enters viewport
    threshold = 0.1,
}: LazyLoadComponentProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin,
        threshold,
    });

    const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

    useEffect(() => {
        if (inView && !Component) {
            importFunc().then((mod) => setComponent(() => mod.default));
        }
    }, [inView]);

    if (Component) {
        return <Component {...componentProps} />;
    }

    return <span ref={ref} />;
}
import React, { ComponentType, useEffect, useState } from 'react';
import useIntersectionObserver from './components/observerWrapper/ObserverWrapper'; 

const withLazyLoad = <P extends object>(
    WrappedComponent: ComponentType<P>,
    threshold = 0.5
): React.FC<P> => {
    const LazyLoadedComponent: React.FC<P> = (props: P) => {
        const [isInView, ref] = useIntersectionObserver(threshold);
        const [hasLoaded, setHasLoaded] = useState(false);
        useEffect(() => {
            if (isInView && !hasLoaded) {
                setHasLoaded(true);
            }
        }, [isInView, hasLoaded]);
        return (
            <div ref={ref}>
                {hasLoaded ? <WrappedComponent {...props} /> : <div>Loading...</div>}
            </div>
        );
    };

    LazyLoadedComponent.displayName = `WithLazyLoad(${getDisplayName(WrappedComponent)})`;

    return LazyLoadedComponent;
};

function getDisplayName(WrappedComponent: React.ComponentType<any>): string {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withLazyLoad;
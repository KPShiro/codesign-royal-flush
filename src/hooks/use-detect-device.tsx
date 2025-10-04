import { debounce } from '@utils/debounce';
import { useEffect, useMemo, useState } from 'react';

type PlatformType = 'mobile' | 'tablet' | 'laptop' | 'desktop';

type UseDetectDeviceProps = {
    debounceTime: number;
    breakpoints: {
        tablet: number;
        laptop: number;
        desktop: number;
    };
};

function getPlatformType(
    width: number,
    breakpoints: UseDetectDeviceProps['breakpoints']
): PlatformType {
    if (width >= breakpoints.desktop) {
        return 'desktop';
    }

    if (width >= breakpoints.laptop) {
        return 'laptop';
    }

    if (width >= breakpoints.tablet) {
        return 'tablet';
    }

    return 'mobile';
}

export function useDetectDevice(config?: Partial<UseDetectDeviceProps>) {
    const [platformType, setPlatformType] = useState<PlatformType | undefined>(undefined);

    const deviceDetectionConfig: UseDetectDeviceProps = useMemo(
        () => ({
            debounceTime: config?.debounceTime ?? 100,
            breakpoints: {
                tablet: 768,
                laptop: 1024,
                desktop: 1440,
                ...config?.breakpoints,
            },
        }),
        [config]
    );

    useEffect(() => {
        const updatePlatformType = () => {
            const newPlatformType = getPlatformType(
                window.innerWidth,
                deviceDetectionConfig.breakpoints
            );
            setPlatformType(newPlatformType);
        };

        updatePlatformType();

        const debounceHandler = debounce(updatePlatformType, deviceDetectionConfig.debounceTime);

        window.addEventListener('resize', debounceHandler);

        return () => {
            window.removeEventListener('resize', debounceHandler);
        };
    }, [deviceDetectionConfig]);

    return {
        isMobile: platformType === 'mobile',
        isTablet: platformType === 'tablet',
        isLaptop: platformType === 'laptop',
        isDesktop: platformType === 'desktop',
    };
}

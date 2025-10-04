import { formatCurrency } from '@utils/format-currency';
import { Icon } from '@components/icon';
import { CoinsIcon, DiamondIcon } from 'lucide-react';
import { JSX } from 'react';

/**
 * @deprecated This is deprecated and will be removed in future releases.
 */
export type CoinType = 'GLD' | 'DMD';

/**
 * @deprecated This is deprecated and will be removed in future releases.
 */
type CoinMap = {
    [K in CoinType]: {
        code: K;
        name: string;
        icon: JSX.Element;
        formatter: (value: number) => string;
    };
};

/**
 * @deprecated This is deprecated and will be removed in future releases.
 */
export const CoinMap: CoinMap = {
    GLD: {
        code: 'GLD',
        name: 'Gold',
        icon: <Icon icon={CoinsIcon} size="sm" />,
        formatter: (value: number) => formatCurrency(value, 'GLD'),
    },
    DMD: {
        code: 'DMD',
        name: 'Diamond',
        icon: <Icon icon={DiamondIcon} size="sm" />,
        formatter: (value: number) => formatCurrency(value, 'DMD'),
    },
};

/**
 * @deprecated This is deprecated and will be removed in future releases.
 */
export type CoinData = CoinMap[CoinType];

/**
 * @deprecated This is deprecated and will be removed in future releases.
 */
export const COIN_TYPES = Object.keys(CoinMap) as CoinType[];

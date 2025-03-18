import { getBrowserLocale } from '@utils/get-browser-locale';

export function formatPercent(value: number): string {
    const browserLocale = getBrowserLocale();

    const formatter = new Intl.NumberFormat(browserLocale, {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return formatter.format(value);
}

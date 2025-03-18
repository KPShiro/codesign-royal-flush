import { getBrowserLocale } from '@utils/get-browser-locale';

export function formatNumber(value: number): string {
    const browserLocale = getBrowserLocale();

    const formatter = new Intl.NumberFormat(browserLocale, {
        style: 'decimal',
        maximumFractionDigits: 2,
    });

    return formatter.format(value);
}

import { getBrowserLocale } from '@utils/get-browser-locale';

export function formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
    const browserLocale = getBrowserLocale();

    const formatter = new Intl.NumberFormat(browserLocale, {
        style: 'decimal',
        maximumFractionDigits: 2,
        ...options,
    });

    return formatter.format(value);
}

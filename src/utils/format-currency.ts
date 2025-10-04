import { getBrowserLocale } from '@utils/get-browser-locale';

export function formatCurrency(
    value: number,
    currency: string,
    options?: Intl.NumberFormatOptions
): string {
    const browserLocale = getBrowserLocale();

    const formatter = new Intl.NumberFormat(browserLocale, {
        style: 'currency',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        currency: currency,
        ...options,
    });

    return formatter.format(value);
}

import { getBrowserLocale } from '@utils/get-browser-locale';

export function formatDateTime(date?: Date | number): string {
    const browserLocale = getBrowserLocale();

    const formatter = new Intl.DateTimeFormat(browserLocale, {
        dateStyle: 'medium',
        timeStyle: 'short',
    });

    return formatter.format(date);
}

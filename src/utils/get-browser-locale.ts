export function getBrowserLocale(): string {
    return navigator.language ?? 'en-US';
}

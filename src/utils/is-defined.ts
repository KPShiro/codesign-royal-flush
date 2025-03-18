export function isDefined<T = unknown>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined;
}

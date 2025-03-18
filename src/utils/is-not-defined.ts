export function isNotDefined(value: unknown): value is null | undefined {
    return value === null || value === undefined;
}

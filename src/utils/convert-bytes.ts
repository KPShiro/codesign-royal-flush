type Unit = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

export function convertBytes(bytes: number, targetUnit: Unit): number {
    const units: { [key in Unit]: number } = {
        B: 1,
        KB: 1024,
        MB: 1024 ** 2,
        GB: 1024 ** 3,
        TB: 1024 ** 4,
    };

    if (!units[targetUnit]) {
        throw new Error(`Unsupported unit: ${targetUnit}`);
    }

    return bytes / units[targetUnit];
}

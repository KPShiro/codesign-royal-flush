export function delayedPromise<T>(callback: () => T, delay: number = 1000): Promise<T> {
    return new Promise((resolve, reject) => {
        if (typeof delay !== 'number' || delay < 0) {
            return reject(new Error('Delay must be a non-negative number.'));
        }

        if (typeof callback !== 'function') {
            return reject(new Error('Callback must be a function.'));
        }

        setTimeout(() => {
            try {
                const result: T = callback();
                resolve(result);
            } catch (error: any) {
                reject(error);
            }
        }, delay);
    });
}

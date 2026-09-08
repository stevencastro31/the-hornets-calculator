export function RoundToEven(n: number): number {
    let rounded = Math.floor(n + 0.5);

    if (rounded % 2 !== 0 && n % 1 === 0.5)
        rounded++;

    return rounded;
}
export function toCurrency(value: number): string {
  return new Intl.NumberFormat((navigator && navigator.language) || 'en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('formats numbers to currency format', () => {
    expect(toCurrency(5)).toBe('$5.00');
  });
}

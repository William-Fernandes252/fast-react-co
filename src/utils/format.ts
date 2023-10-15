export function toCurrency(value: number): string {
  return new Intl.NumberFormat(
    (navigator && navigator.language) || DEFAULT_LOCALE,
    {
      style: 'currency',
      currency: DEFAULT_CURRENCY_CODE,
    },
  ).format(value);
}

export function formatNumber(numero: number): string {
  return numero.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

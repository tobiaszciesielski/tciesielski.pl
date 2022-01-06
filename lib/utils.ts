export function dateStringToDateObject(date: string): Date {
  const [d, m, y] = date.split('-');
  return new Date(Number(y), Number(m), Number(d));
}

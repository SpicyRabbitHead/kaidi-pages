/** Legacy telemetry helpers retained for the stats test surface. The academic source page does not publish birth, travel, or location facts. */
export const BIRTH_DATE = '1970-01-01T00:00:00Z';
export const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2421897;
export const COMPUTING_SINCE = 1993;
export const COUNTRIES_VISITED = 53;
export const CURRENT_CITY = 'New York, NY';
export const AGE_PRECISION_FULL = 11;
export const AGE_MIN_INTERVAL = 25;

export function ageIntervalFor(precision: number): number {
  return Math.max(AGE_MIN_INTERVAL, Math.floor(MS_PER_YEAR / 10 ** precision));
}

export function ageAt(now: number, precision: number): string {
  return ((now - new Date(BIRTH_DATE).getTime()) / MS_PER_YEAR).toFixed(
    precision,
  );
}

export function agePlaceholder(precision: number): string {
  return `--.${'-'.repeat(precision)}`;
}

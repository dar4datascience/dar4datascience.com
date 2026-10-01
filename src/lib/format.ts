const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(value: string): string {
  if (/^\d{4}-\d{2}$/.test(value)) {
    const [year, month] = value.split("-").map(Number);
    return `${MONTHS[month - 1]} ${year}`;
  }
  return value;
}

export function formatDateRange(start: string, end: string | null): string {
  return `${formatDate(start)} – ${end === null ? "Present" : formatDate(end)}`;
}

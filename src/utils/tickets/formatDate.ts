export function formatDate(data: string) {
  const date = Date.parse(convertToISO(data));
  if (isNaN(date)) return data;

  const rawDate = Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short",
  }).format(date);

  const matches = rawDate.split(" ");
  if (matches.length !== 5) return data;
  return `${matches[1]} ${matches[2]} ${matches[3]}, ${formatWeekday(matches[0])}`;
}

function convertToISO(date: string) {
  const matches = date.split(".");
  if (matches.length !== 3) return date;
  return `${matches[1]}/${matches[0]}/20${matches[2]}`;
}

function formatWeekday(wd: string) {
  let startIdx = 0;
  /* IE 11 */
  if (wd.charCodeAt(0) === 8206) startIdx = 1;
  return `${wd.charAt(startIdx).toUpperCase()}${wd.charAt(startIdx + 1)}`;
}

export function calculateDailyPoints(): number {
  const today = new Date();
  const currentYear = today.getFullYear();

  const seasons = [
    { name: "winter", start: new Date(currentYear, 11, 1) },
    { name: "spring", start: new Date(currentYear, 2, 1) },
    { name: "summer", start: new Date(currentYear, 5, 1) },
    { name: "autumn", start: new Date(currentYear, 8, 1) },
  ];

  let currentSeasonStart = seasons[0].start;
  for (let i = seasons.length - 1; i >= 0; i--) {
    if (today >= seasons[i].start) {
      currentSeasonStart = seasons[i].start;
      break;
    }
  }

  const dayOfSeason =
    Math.floor(
      (today.getTime() - currentSeasonStart.getTime()) / (1000 * 60 * 60 * 24)
    ) + 1;

  if (dayOfSeason === 1) {
    return 2;
  }
  if (dayOfSeason === 2) {
    return 3;
  }

  let prevPrev = 2;
  let prev = 3;

  for (let day = 3; day <= dayOfSeason; day++) {
    const current = Math.round(prev + 0.6 * prevPrev);
    prevPrev = prev;
    prev = current;
  }

  return prev;
}

export function formatPoints(points: number): string {
  if (points >= 1000000) {
    const millions = Math.round(points / 1000000);
    return String(millions) + "M";
  }
  if (points >= 1000) {
    const thousands = Math.round(points / 1000);
    return String(thousands) + "K";
  }
  return String(points);
}

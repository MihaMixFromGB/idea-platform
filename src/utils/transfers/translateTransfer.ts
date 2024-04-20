import { Transfer } from "@/types";

export function translateTransfer(stops: Transfer["value"]) {
  if (stops === null) return "Все";
  if (stops === 0) return "Без пересадок";

  const rest = stops % 10;
  if (rest === 1) return `${stops} пересадка`;
  if (rest > 1 && rest < 5) return `${stops} пересадки`;
  return `${stops} пересадок`;
}

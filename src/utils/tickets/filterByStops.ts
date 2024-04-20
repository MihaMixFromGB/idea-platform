import { Ticket } from "@/types";

export function filterByStops(
  tickets: Ticket[],
  stops: Ticket["stops"][]
): Ticket[] {
  return tickets.filter((t) => stops.some((s) => s === t.stops));
}

import { Ticket } from "@/types";

export function sortByPrice(tickets: Ticket[]) {
  return tickets.slice().sort((t1, t2) => t1.price - t2.price);
}

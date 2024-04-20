import json from "../mocks/tickets.json";
import { transformTickets } from "../transforms";

export function getTickets() {
  return transformTickets(json.tickets);
}

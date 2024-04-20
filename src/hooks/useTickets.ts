import { useState } from "react";
import { getTickets } from "@/api/methods";
import { useTransfers } from "./useTransfers";
import { filterByStops, sortByPrice } from "@/utils/tickets";

export function useTickets() {
  const [tickets] = useState(() => sortByPrice(getTickets()));
  const [stops] = useTransfers();
  return stops.length > 0 ? filterByStops(tickets, stops) : tickets;
}

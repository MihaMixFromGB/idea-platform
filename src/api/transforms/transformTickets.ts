import { Ticket } from "@/types";

type JSONTicket = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
};

export function transformTickets(tickets: JSONTicket[]) {
  return tickets.map((raw) => transformTicket(raw));
}

function transformTicket(json: JSONTicket): Ticket {
  return {
    departure: {
      origin: json.origin,
      name: json.origin_name,
      date: json.departure_date,
      time: json.departure_time,
    },
    arrival: {
      origin: json.destination,
      name: json.destination_name,
      date: json.arrival_date,
      time: json.arrival_time,
    },
    price: json.price,
    stops: json.stops,
  };
}

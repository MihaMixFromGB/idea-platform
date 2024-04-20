export type Ticket = {
  arrival: Location;
  departure: Location;
  price: number;
  stops: number;
};

export type Location = {
  origin: string;
  name: string;
  date: string;
  formatDate: string;
  time: string;
};

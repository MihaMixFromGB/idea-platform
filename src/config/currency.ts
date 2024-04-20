import { Currency } from "@/types";

export const currencies: Currency[] = ["RUB", "USD", "EUR"];

export const converters: Record<Currency, number> = {
  RUB: 1,
  EUR: 100,
  USD: 93.9,
};

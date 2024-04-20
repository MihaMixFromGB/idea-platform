import { converters } from "@/config";
import { Currency } from "@/types";

export function convertCurrency(sumInRUB: number, currency: Currency) {
  return {
    value: convert(sumInRUB, currency),
    sign: getSign(currency),
  };
}

function convert(sumInRUB: number, currency: Currency) {
  if (currency === "RUB") return sumInRUB;
  if (currency === "USD") return Math.ceil(sumInRUB / converters.USD);
  if (currency === "EUR") return Math.ceil(sumInRUB / converters.EUR);
}

function getSign(currency: Currency) {
  switch (currency) {
    case "RUB": {
      return "₽";
    }
    case "USD": {
      return "$";
    }
    case "EUR": {
      return "€";
    }
    default: {
      return "";
    }
  }
}

import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Currency } from "@/types";

export function useCurrency() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currency = (searchParams.get("currency") ?? "RUB") as Currency;
  const setCurrency = useCallback(
    (c: Currency) => {
      setSearchParams((prev) => {
        prev.set("currency", c);
        return prev;
      });
    },
    [setSearchParams]
  );

  return [currency ?? "RUB", setCurrency] as const;
}

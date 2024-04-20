import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Transfer } from "@/types";

export function useTransfers() {
  const [searchParams, setSearchParams] = useSearchParams();

  const transfers = transformTransferValues(searchParams.get("transfers"));

  const setTransfer = useCallback(
    (stops: number | null) => {
      if (stops === null || stops < 0) {
        setSearchParams((prev) => {
          prev.delete("transfers");
          return prev;
        });
        return;
      }
      setSearchParams((prev) => {
        const transfers = prev.get("transfers");
        prev.set(
          "transfers",
          transfers ? `${transfers},${stops}` : String(stops)
        );
        return prev;
      });
    },
    [setSearchParams]
  );

  const removeTransfer = useCallback(
    (stops: number) => {
      setSearchParams((prev) => {
        const transfers = prev.get("transfers");
        if (!transfers) return prev;
        const newValue = transfers
          .split(",")
          .filter((t) => t !== String(stops))
          .join(",");
        if (newValue) prev.set("transfers", newValue);
        else prev.delete("transfers");
        return prev;
      });
    },
    [setSearchParams]
  );

  return [transfers, setTransfer, removeTransfer] as const;
}

function transformTransferValues(
  data: string | null
): Exclude<Transfer["value"], null>[] {
  if (data === null) return [];
  return data.split(",").map((t) => parseInt(t));
}

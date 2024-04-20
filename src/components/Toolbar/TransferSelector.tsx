import { Box, FormGroup } from "@mui/material";
import { useTransfers } from "@/hooks";
import Checkbox from "./ui/Checkbox";
import SubHeader from "./ui/SubHeader";
import { transfers } from "@/config";
import { Transfer } from "@/types";

const TransferSelector: React.FC = () => {
  // const [selected, setSelected] = useState<Array<Transfer["value"]>>([]);
  // const onChange = (
  //   value: Transfer["value"],
  //   checked: boolean,
  //   onlyOne?: boolean
  // ) => {
  //   if (onlyOne) setSelected(() => []);
  //   if (checked) setSelected((s) => [...s, value]);
  //   else setSelected((s) => s.filter((t) => t !== value));
  // };

  const [selected, setTransfer, removeTransfer] = useTransfers();

  const hasChecked = (value: Transfer["value"]) => {
    if (value === null && selected.length === 0) return true;
    return selected?.some((s) => s === value);
  };

  const onChange = (
    value: Transfer["value"],
    checked: boolean,
    onlyOne?: boolean
  ) => {
    if (onlyOne) setTransfer(null);
    if (checked) setTransfer(value);
    else if (value !== null) removeTransfer(value);
  };

  return (
    <Box>
      <SubHeader title="Количество пересадок" />
      <FormGroup>
        {transfers.map((t) => (
          <Checkbox
            key={t.value ?? -1}
            label={t.label}
            checked={hasChecked(t.value)}
            onChange={(checked, onlyOne) => onChange(t.value, checked, onlyOne)}
            onlyOne={t.value !== null}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default TransferSelector;

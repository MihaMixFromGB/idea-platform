import { Box, ButtonGroup, Button } from "@mui/material";
import SubHeader from "./ui/SubHeader";
import { currencies } from "@/config";
import { useCurrency } from "@/hooks";

const CurrencySelector: React.FC = () => {
  const [currency, setCurrency] = useCurrency();
  return (
    <Box>
      <SubHeader title="Валюта" />
      <ButtonGroup variant="outlined" aria-label="Currecy's selector">
        n{" "}
        {currencies.map((c) => (
          <Button
            key={c}
            sx={{ padding: "6px 24px" }}
            variant={c === currency ? "contained" : "outlined"}
            onClick={() => setCurrency(c)}
          >
            {c}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default CurrencySelector;

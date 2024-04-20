import { Paper } from "@mui/material";
import CurrencySelector from "./CurrencySelector";
import TransferSelector from "./TransferSelector";

const Toolbar: React.FC = () => {
  return (
    <Paper
      className="toolbar"
      elevation={1}
      sx={{
        padding: "16px",
        borderRadius: "4px",
        "& > div:first-of-type": {
          marginBottom: "48px",
        },
      }}
    >
      <CurrencySelector />
      <TransferSelector />
    </Paper>
  );
};

export default Toolbar;

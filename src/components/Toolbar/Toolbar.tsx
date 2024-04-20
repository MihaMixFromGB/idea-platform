import { Paper, Typography } from "@mui/material";
import CurrencySelector from "./CurrencySelector";
import TransferSelector from "./TransferSelector";

const Toolbar: React.FC = () => {
  return (
    <Paper
      component="section"
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
      <Typography component="h2" className="visually-hidden">
        Панель фильтрации билетов
      </Typography>
      <CurrencySelector />
      <TransferSelector />
    </Paper>
  );
};

export default Toolbar;

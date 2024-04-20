import { Paper, Box, Button } from "@mui/material";
import { orange } from "@mui/material/colors";
import Location from "./Location";
import { useCurrency } from "@/hooks";
import { convertCurrency } from "@/utils/currency";
import { Ticket as TTicket } from "@/types/Ticket";
import TransferInfo from "./TransferInfo";
import TurkishAirlinesLogo from "@/assets/icons/TurkishAirlines.png";

type TicketProps = {
  ticket: TTicket;
};

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  const { price, stops, departure, arrival } = ticket;
  const [selectedCurrency] = useCurrency();
  const currency = convertCurrency(price, selectedCurrency);
  return (
    <Paper
      component="article"
      className="ticket"
      elevation={2}
      sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
          borderRight: "1px solid #eeeeee",
        }}
      >
        <img width={100} src={TurkishAirlinesLogo} alt="Turkish Airlines" />
        <Button
          sx={{
            marginTop: "16px",
            width: "140px",
            lineHeight: 1.2,
            textTransform: "initial",
            backgroundColor: orange[700],
            "&:hover": {
              backgroundColor: orange[500],
            },
          }}
          variant="contained"
        >
          Купить
          <br />
          {` за ${currency.value?.toLocaleString("ru")} ${currency.sign}`}
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", xsm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          minWidth: { xs: 0, xsm: "340px" },
          padding: "16px",
        }}
      >
        <Location type="departure" location={departure} />
        <TransferInfo stops={stops} />
        <Location type="arrival" location={arrival} />
      </Box>
    </Paper>
  );
};

export default Ticket;

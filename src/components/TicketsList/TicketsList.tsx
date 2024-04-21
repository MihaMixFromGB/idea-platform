import { Box, Typography } from "@mui/material";
import { useTickets } from "@/hooks";
import Ticket from "../Ticket";

const TicketsList: React.FC = () => {
  const tickets = useTickets();
  return (
    <Box
      component="section"
      sx={{
        "& > .ticket": { marginBottom: "24px" },
        "& > .ticket:last-child": { marginBottom: 0 },
      }}
    >
      <Typography component="h2" className="visually-hidden">
        Результаты поиска
      </Typography>
      {tickets.map((t, idx) => (
        <Ticket key={idx} ticket={t} />
      ))}
    </Box>
  );
};

export default TicketsList;

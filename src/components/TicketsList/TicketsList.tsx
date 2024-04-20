import { Box } from "@mui/material";
import { useTickets } from "@/hooks";
import Ticket from "../Ticket";

const TicketsList: React.FC = () => {
  const tickets = useTickets();
  return (
    <Box
      sx={{
        "& > .ticket": { marginBottom: "24px" },
        "& > .ticket:last-child": { marginBottom: 0 },
      }}
    >
      {tickets.map((t, idx) => (
        <Ticket key={idx} ticket={t} />
      ))}
    </Box>
  );
};

export default TicketsList;

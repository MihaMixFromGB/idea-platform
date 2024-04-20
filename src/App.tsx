import { Box } from "@mui/material";
import Logo from "./components/Logo";
import Toolbar from "./components/Toolbar";
import TicketsList from "./components/TicketsList";

function App() {
  return (
    <Box
      sx={{
        padding: "24px",
        "& > .logo": { margin: { xs: "0 0 24px", md: "24px 0 48px" } },
      }}
    >
      <Logo />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          "& > .toolbar": {
            marginRight: { xs: 0, md: "24px" },
            marginBottom: { xs: "24px", md: 0 },
          },
        }}
      >
        <Toolbar />
        <TicketsList />
      </Box>
    </Box>
  );
}

export default App;

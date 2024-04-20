import { Box } from "@mui/material";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import TicketsList from "./components/TicketsList";

function App() {
  return (
    <Box sx={{ padding: "24px" }}>
      <Header />
      <Box
        component="main"
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

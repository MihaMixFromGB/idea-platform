import { Box, Typography } from "@mui/material";
import Logo from "../Logo";

const Header: React.FC = () => {
  return (
    <Box
      component="header"
      sx={{ padding: { xs: "0 0 24px", md: "24px 0 48px" } }}
    >
      <Logo />
      <Typography className="visually-hidden" component="h1">
        Компания по бронированию билетов
      </Typography>
    </Box>
  );
};

export default Header;

import { Box } from "@mui/material";
import logo from "@/assets/icons/logo.png";

const Logo: React.FC = () => {
  return (
    <Box
      className="logo"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <img width={64} src={logo} alt="a booking company" />
    </Box>
  );
};

export default Logo;

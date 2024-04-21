import { Box } from "@mui/material";

const Logo: React.FC = () => {
  return (
    <Box
      className="logo"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <img
        srcSet="/icons/logo.webp"
        src="/icons/logo.png"
        width={64}
        alt="a booking company"
        aria-hidden
      />
    </Box>
  );
};

export default Logo;

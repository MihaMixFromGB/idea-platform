import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Location as TLocation } from "@/types";

type LocationProps = {
  type: "departure" | "arrival";
  location: TLocation;
};

const Location: React.FC<LocationProps> = ({ type, location }) => {
  const { time, origin, name, date } = location;
  let place = "";
  if (type === "departure") place = `${origin}, ${name}`;
  else if (type === "arrival") place = `${name}, ${origin}`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: type === "departure" ? "flex-start" : "flex-end",
      }}
    >
      <Typography sx={{ fontSize: "2rem", fontWeight: "light" }} component="p">
        {time}
      </Typography>
      <Typography
        sx={{ fontSize: "0.825rem", fontWeight: "bold" }}
        component="p"
      >
        {place}
      </Typography>
      <Typography sx={{ fontSize: "0.825rem", color: grey[600] }} component="p">
        {date}
      </Typography>
    </Box>
  );
};

export default Location;

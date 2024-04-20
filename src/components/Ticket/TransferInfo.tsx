import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { translateTransfer } from "@/utils/transfers";
import Plane from "@/assets/icons/plane.svg";

type TransferInfoProps = {
  stops: number;
};

const TransferInfo: React.FC<TransferInfoProps> = ({ stops }) => {
  return (
    <Box
      sx={{
        position: { xs: "static", xsm: "absolute" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        top: { xs: 0, xsm: "22px" },
        left: 0,
        margin: { xs: "8px 0", xsm: 0 },
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontSize: "0.725rem",
          fontWeight: "bold",
          color: grey[400],
          paddingRight: "16px",
          marginBottom: "-6px",
        }}
        component="p"
      >
        {translateTransfer(stops)}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "inline-block",
            width: "100px",
            height: "1px",
            backgroundColor: grey[400],
          }}
          component="span"
        ></Box>
        <img width={16} src={Plane} alt="transfer" aria-hidden />
      </Box>
    </Box>
  );
};

export default TransferInfo;

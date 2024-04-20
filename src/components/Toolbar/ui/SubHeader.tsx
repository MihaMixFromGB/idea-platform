import { Typography } from "@mui/material";

type SubHeaderProps = {
  title: string;
};

const SubHeader: React.FC<SubHeaderProps> = ({ title }) => {
  return (
    <Typography
      component="h3"
      sx={{ textTransform: "uppercase", marginBottom: "6px" }}
    >
      {title}
    </Typography>
  );
};

export default SubHeader;

import { useRef } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox as MUICheckbox,
  Button,
} from "@mui/material";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean, onlyOne?: boolean) => void;
  onlyOne?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  onlyOne,
}) => {
  const cbRef = useRef<HTMLInputElement>(null);

  const onOnlyClick = () => {
    const cb = cbRef.current;
    if (!cb) return;
    onChange(true, true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "&:hover": {
          "& .only": {
            display: "block",
          },
        },
      }}
    >
      <FormControlLabel
        control={
          <MUICheckbox
            inputRef={cbRef}
            checked={checked}
            onChange={(e) => onChange(e.target.checked, false)}
          />
        }
        label={label}
      ></FormControlLabel>
      <Button
        sx={{ display: "none", textTransform: "uppercase" }}
        className={onlyOne ? "only" : ""}
        onClick={onOnlyClick}
      >
        ТОЛЬКО
      </Button>
    </Box>
  );
};

export default Checkbox;

import React from "react";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";

export interface Props {
  onClick: any;
}

const VerButtom = (props: Props) => {
  return (
    <>
      <Box onClick={props.onClick}>
        <VisibilityIcon style={{ cursor: "pointer" }} />
      </Box>
    </>
  );
};

export default VerButtom;
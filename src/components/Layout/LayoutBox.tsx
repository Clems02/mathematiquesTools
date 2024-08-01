import { Box, SxProps } from "@mui/material";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type LayoutBoxType = {
  sx?: SxProps;
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;

const LayoutBox = ({ sx, children, ...props }: LayoutBoxType) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",

        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default LayoutBox;

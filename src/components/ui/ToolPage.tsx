import { Paper, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

type ToolPageType = {} & PropsWithChildren;

export const ToolPage = ({ children }: ToolPageType) => {
  return (
    <Paper sx={{ width: "100%", p: 3, borderRadius: "10px" }} elevation={5}>
      <Stack spacing={5} alignItems={"center"}>
        {children}
      </Stack>
    </Paper>
  );
};

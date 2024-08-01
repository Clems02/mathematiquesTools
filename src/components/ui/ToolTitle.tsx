/* eslint-disable react/no-unescaped-entities */
"use client";

import { defaultColor } from "@/src/data/configSite";
import { Paper, Typography, darken } from "@mui/material";

type ToolTitleType = {
  label: string;
};

export const ToolTitle = ({ label }: ToolTitleType) => {
  return (
    <Paper
      elevation={5}
      sx={{
        px: 3,
        py: 1,
        borderRadius: "90px",
        border: `4px solid ${darken(defaultColor, 0.3)}`,
        m: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{ textDecoration: "underline", fontWeight: 900 }}
      >
        {label}
      </Typography>
    </Paper>
  );
};

"use client";

import { defaultColor } from "@/src/data/configSite";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  darken,
} from "@mui/material";
import Link from "next/link";

type ToolCardType = {
  label: string;
  url: string;
};

export const ToolCard = ({ url, label }: ToolCardType) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        "&:hover": {
          outline: `4px solid ${darken(defaultColor, 0.4)}`,
        },
        border: "4px solid transparent",
      }}
      elevation={5}
    >
      <CardActionArea LinkComponent={Link} href={url} sx={{ height: "100%" }}>
        <CardContent
          sx={{
            maxWidth: "300px",
            textAlign: "center",
            height: "100%",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography variant="subtitle2" fontFamily={"Cartoon"}>
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

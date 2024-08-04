"use client";

import { defaultColor } from "@/src/data/configSite";
import { tool } from "@/src/data/outils";
import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
  darken,
} from "@mui/material";
import Link from "next/link";

export const ToolCard = ({ url, label, inProgress }: tool) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        "&:hover": {
          outline: `4px solid ${darken(defaultColor, 0.4)}`,
        },
        border: "4px solid transparent",
        position: "relative",
        overflow: "visible",
      }}
      elevation={5}
    >
      {inProgress && (
        <Chip
          label="En construction..."
          color="warning"
          sx={{
            position: "absolute",
            top: -20, // Ajustez cette valeur pour positionner le chip à cheval sur la bordure
            left: "50%",
            transform: "translateX(-50%)", // Centre horizontalement
            px: 2,
            fontWeight: 900,
          }}
        />
      )}
      <CardActionArea
        LinkComponent={Link}
        href={inProgress ? "/" : url}
        sx={{ height: "100%" }}
      >
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

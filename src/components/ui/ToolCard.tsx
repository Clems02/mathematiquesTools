"use client";

import { defaultColor } from "@/src/data/configSite";
import { tool } from "@/src/data/outils";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
  darken,
  lighten,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Icon from "./Icon";

export const ToolCard = ({ url, label, inProgress, icon }: tool) => {
  const theme = useTheme();

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
        height: "100%",
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: 2,
          }}
        >
          <Box
            sx={{
              border: `2px solid ${theme.palette.primary.dark}`,
              p: 1,
              borderRadius: 50,
              display: "flex",
              backgroundColor: lighten(theme.palette.primary.light, 0.5),
            }}
          >
            <Icon name={icon} color={theme.palette.primary.dark} size={20} />
          </Box>
          <Typography variant="subtitle2" fontFamily={"Cartoon"}>
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

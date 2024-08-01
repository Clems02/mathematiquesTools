/* eslint-disable react/no-unescaped-entities */
"use client";

import { ToolPage } from "@/src/components/ui/ToolPage";
import { ToolTitle } from "@/src/components/ui/ToolTitle";
import { useValue } from "@/src/hook/useValue";
import { resolveEquation } from "@/src/lib/outils/equation-1er-deg";
import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Equation1erDegrePage() {
  const { value, changeValue } = useValue();

  const handleCalcul = () => {
    resolveEquation(value as string);
  };

  return (
    <ToolPage>
      <ToolTitle label="Résolution d'équation" />
      <Stack alignItems={"center"}>
        <Typography variant="h6">
          Entre une équation de la forme ax + b = cx + d
        </Typography>
        <Typography variant="subtitle2">
          a, b, c et d sont des réels.
        </Typography>
      </Stack>
      <Stack spacing={2} direction={"row"} alignItems={"center"}>
        <TextField
          label="Equation"
          placeholder="ax + b = cx + d"
          value={value}
          onChange={changeValue}
        />
        <Button onClick={handleCalcul}>Résoudre</Button>
      </Stack>
    </ToolPage>
  );
}

import { ToolPage } from "@/src/components/ui/ToolPage";
import { ToolTitle } from "@/src/components/ui/ToolTitle";
import { Stack, Typography } from "@mui/material";
import { DecompositionForm } from "./Form";

export default function DecompositionPage() {
  return (
    <ToolPage>
      <ToolTitle label="Décomposition en produit de facteurs premiers" />
      <Stack alignItems={"center"}>
        <Typography variant="h6">
          Entre un nombre entier naturel pour le décomposer.
        </Typography>
      </Stack>
      <DecompositionForm />
    </ToolPage>
  );
}

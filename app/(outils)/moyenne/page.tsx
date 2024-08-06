import { ToolPage } from "@/src/components/ui/ToolPage";
import { ToolTitle } from "@/src/components/ui/ToolTitle";
import { Stack, Typography } from "@mui/material";
import { MoyenneForm } from "./Form";

export default function VerifPremierPage() {
  return (
    <ToolPage>
      <ToolTitle label="Calcul d'une moyenne" />
      <Stack alignItems={"center"}>
        <Typography variant="h6">
          Entre ta liste de nombres pour calculer la moyenne.
        </Typography>
      </Stack>
      <MoyenneForm />
    </ToolPage>
  );
}

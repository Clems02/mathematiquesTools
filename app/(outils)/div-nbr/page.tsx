import { ToolPage } from "@/src/components/ui/ToolPage";
import { ToolTitle } from "@/src/components/ui/ToolTitle";
import { Stack, Typography } from "@mui/material";
import { DiviseursListForm } from "./Form";

export default async function DiviseurNbrPage() {
  return (
    <ToolPage>
      <ToolTitle label="Diviseurs d'un nombre" />
      <Stack alignItems={"center"}>
        <Typography variant="h6">
          Entre un nombre entier naturel pour obtenir tous ses diviseurs.
        </Typography>
      </Stack>
      <DiviseursListForm />
    </ToolPage>
  );
}

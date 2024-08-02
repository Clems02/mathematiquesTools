/* eslint-disable react/no-unescaped-entities */
import { ToolPage } from "@/src/components/ui/ToolPage";
import { ToolTitle } from "@/src/components/ui/ToolTitle";
import { Stack, Typography } from "@mui/material";
import { VerifPremierForm } from "./Form";

export default function VerifPremierPage() {
  return (
    <ToolPage>
      <ToolTitle label="Nombre premier ?" />
      <Stack alignItems={"center"}>
        <Typography variant="h6">
          Entre un nombre entier naturel pour vérifier s'il est premier.
        </Typography>
      </Stack>
      <VerifPremierForm />
    </ToolPage>
  );
}

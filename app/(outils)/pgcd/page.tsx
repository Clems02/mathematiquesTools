import { ToolPage } from "@/src/components/ui/ToolPage";
import { ToolTitle } from "@/src/components/ui/ToolTitle";
import { Stack, Typography } from "@mui/material";
import { PGCDForm } from "./Form";

export default function ListPremierPage() {
  return (
    <ToolPage>
      <ToolTitle label="PGCD de 2 nombres" />
      <Stack alignItems={"center"}>
        <Typography variant="h6">
          Entre deux nombres entiers naturels pour obtenir le PGCD.
        </Typography>
      </Stack>
      <PGCDForm />
    </ToolPage>
  );
}

import { ToolPage } from "@/src/components/ui/ToolPage";
import { ToolTitle } from "@/src/components/ui/ToolTitle";
import { Stack, Typography } from "@mui/material";
import { ListPremierForm } from "./Form";

export default function ListPremierPage() {
  return (
    <ToolPage>
      <ToolTitle label="Liste nombres premiers dans un intervalle" />
      <Stack alignItems={"center"}>
        <Typography variant="h6">
          Entre deux nombres entiers naturels pour obtenir la liste des nombres
          premiers.
        </Typography>
      </Stack>
      <ListPremierForm />
    </ToolPage>
  );
}

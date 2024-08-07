import { ToolPage } from "@/src/components/ui/ToolPage";
import { ToolTitle } from "@/src/components/ui/ToolTitle";
import { Stack, Typography } from "@mui/material";
import { MedianeForm } from "./Form";

export default function VerifPremierPage() {
  return (
    <ToolPage>
      <ToolTitle label="Trouver une médiane" />
      <Stack alignItems={"center"}>
        <Typography variant="h6">
          Entre ta liste de nombres pour trouver la médiane.
        </Typography>
      </Stack>
      <MedianeForm />
    </ToolPage>
  );
}

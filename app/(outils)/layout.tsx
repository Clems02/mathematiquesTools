import ContainerCenter from "@/src/components/Layout/ContainerCenter";
import { BackButton } from "@/src/lib/other/BackButton";
import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <Stack spacing={4} justifyContent={"center"} alignItems={"center"} my={4}>
      <ContainerCenter>{children}</ContainerCenter>
      <BackButton>Retour outils</BackButton>
    </Stack>
  );
};

export default layout;

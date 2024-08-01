import { Container, SxProps } from "@mui/material";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type ContainerCenterType = {
  sx?: SxProps;
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;

const ContainerCenter = ({ sx, children, ...props }: ContainerCenterType) => {
  return (
    <Container
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default ContainerCenter;

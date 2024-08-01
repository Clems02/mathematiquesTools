import ContainerCenter from "@/src/components/Layout/ContainerCenter";
import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return <ContainerCenter>{children}</ContainerCenter>;
};

export default layout;

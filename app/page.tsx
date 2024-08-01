import ContainerCenter from "@/src/components/Layout/ContainerCenter";
import { ToolCard } from "@/src/components/ui/ToolCard";
import { tools } from "@/src/data/outils";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <ContainerCenter>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        rowGap={3}
        columnGap={3}
      >
        {tools.map((tool) => (
          <ToolCard key={tool.id} label={tool.label} url={tool.url} />
        ))}
      </Stack>
    </ContainerCenter>
  );
}

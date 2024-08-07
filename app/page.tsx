import ContainerCenter from "@/src/components/Layout/ContainerCenter";
import { ToolCard } from "@/src/components/ui/ToolCard";
import { tools } from "@/src/data/outils";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <ContainerCenter sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {tools.map((tool) => (
          <Grid key={tool.id} item xs={12} sm={6} md={4}>
            <ToolCard {...tool} />
          </Grid>
        ))}
      </Grid>
    </ContainerCenter>
  );
}

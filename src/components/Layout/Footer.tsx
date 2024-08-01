import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", py: 2 }}>
      <Container maxWidth="lg">
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="body2">
            &copy; Copyright {new Date().getFullYear()} - CHAUMONT Clément{" "}
          </Typography>
          <Typography variant="body2">Tous droits réservés.</Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

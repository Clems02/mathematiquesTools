import LinkNext from "@/src/lib/other/LinkNext";
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <AppBar component={"nav"} position="static">
        <Toolbar sx={{ justifyContent: "space-between", mx: "auto" }}>
          <LinkNext href="/">
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Image
                src={"/images/favicon.svg"}
                alt="Logo application"
                width={50}
                height={35}
              />
              <Typography variant="h5" fontWeight={900} alignItems={"center"}>
                Maths Tools
              </Typography>
            </Stack>
          </LinkNext>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

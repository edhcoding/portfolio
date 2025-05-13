import { Sections } from "@/types";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Call from "@mui/icons-material/Call";
import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { contactsData } from "@/data/contackData";

const { mobile, email, githubId, instagramId, linkedIn } = contactsData;

export default function ContactSection() {
  return (
    <>
      <Box id={Sections.CONTACTS} />
      <Box
        px={3}
        py={10}
        left={0}
        bottom={0}
        zIndex={-1}
        width="100vw"
        position="sticky"
        bgcolor="primary.dark"
      >
        <Grid color="white" mx="auto" maxWidth="1024px">
          <Typography variant="h2">Contacts.</Typography>
          <Divider
            orientation="horizontal"
            sx={{ borderColor: "#999", mt: 1, mb: 3 }}
          />
          <Grid my={2} width="fit-content">
            <Grid
              container
              mt={2}
              component="a"
              color="inherit"
              target="_blank"
              alignItems="center"
              href={`tel:${mobile.replace(/-/g, "")}`}
              sx={{ textDecoration: "none" }}
            >
              <Call />
              <Typography variant="body2" ml={2}>
                {mobile}
              </Typography>
            </Grid>
            <Grid
              container
              mt={2}
              component="a"
              color="inherit"
              target="_blanc"
              alignItems="center"
              href={`mailto:${email}`}
              sx={{ textDecoration: "none" }}
            >
              <Email />
              <Typography variant="body2" ml={2}>
                {email}
              </Typography>
            </Grid>
            <Grid
              container
              alignItems="center"
              mt={2}
              component="a"
              color="inherit"
              target="_blanc"
              href={`https://github.com/${githubId}`}
              sx={{ textDecoration: "none" }}
            >
              <GitHub />
              <Typography variant="body2" ml={2}>
                {githubId}
              </Typography>
            </Grid>
            <Grid
              container
              alignItems="center"
              mt={2}
              component="a"
              color="inherit"
              target="_blanc"
              href={`https://www.instagram.com/${instagramId}`}
              sx={{ textDecoration: "none" }}
            >
              <Instagram />
              <Typography variant="body2" ml={2}>
                @{instagramId}
              </Typography>
            </Grid>
            <Grid
              container
              alignItems="center"
              mt={2}
              component="a"
              color="inherit"
              target="_blanc"
              href={`https://www.linkedin.com/in/${linkedIn}`}
              sx={{ textDecoration: "none" }}
            >
              <LinkedIn />
              <Typography variant="body2" ml={2}>
                {linkedIn}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

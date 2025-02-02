import { Container, Typography, Box, Button, Grid, Paper} from "@mui/material";
import { motion } from "framer-motion";
import teamImage from "../assets/team.png";

export default function JoinTeam() {
  return (
    <Box sx={{ my: { xs: 6, md: 12, lg: 15 }, mb: { xs: 4, md: 8, lg: 30 } }}>
      <Container maxWidth="lg" sx={{zIndex :-10}}>
        <Box
          sx={{
            // bgcolor: "background.paper",
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Grid container alignItems="end" spacing={3}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent:"center",
                    height: { xs: 300, md: 400 },
                  }}
                >
                  <img
                    src={teamImage}
                    alt="Successful Trader"
                    style={{
                      height:"100%",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ px: { xs: 4, md: 6 } , py: { xs: 2, md: 3 } }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  >
                    Join the team of our{" "}
                    <Box
                      component="span"
                      sx={{
                        color: "primary.main",
                        display: "block",
                      }}
                    >
                      successful traders
                    </Box>
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                      mt:10,
                      maxWidth: 480,
                    }}
                  >
                    If you are ready, accept our FTMO Challenge and become our
                    FTMO Trader. You can even try the entire process completely
                    free of charge.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        minWidth: 140,
                        fontSize: "1rem",
                      }}
                    >
                      Learn More
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        minWidth: 140,
                        fontSize: "1rem",
                      }}
                    >
                      Free Trial
                    </Button>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{zIndex : 100, marginTop :'-180px', display:{xs:'none' ,  sm: "block"}}}>
        <Paper elevation={3} sx={{height:"180px", borderRadius :"40px"}}></Paper>
      </Container>
    </Box>
  );
}

import { Box, Typography, Button, Container, Grid, Avatar, AvatarGroup, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import heroImage from '../assets/hero.png';
import avatar from '../assets/avatar1.png';

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  // const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 10, sm: 20 }, px: { xs: 2, sm: 4 } }}>
      <Grid container spacing={4} alignItems="start" justifyContent="space-between">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h5" color="primary" sx={{ letterSpacing: 2, fontSize: { xs: "1.25rem", sm: "1.5rem" } }}>
              SINCE 2021
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "3.75rem" },
              }}
            >
              WE ARE LOOKING FOR PROFITABLE TRADERS
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 4,
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              Unleash your inner whale and trade up to $500,000 in a trading environment where you can earn real gains.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 4, flexDirection: { xs: "column", sm: "row" } }}>
              <Button variant="contained" size={isMobile ? "medium" : "large"} fullWidth={isMobile} sx={{ borderRadius: 2, px: 4 }}>
                Learn More
              </Button>
              <Button variant="outlined" size={isMobile ? "medium" : "large"} fullWidth={isMobile} sx={{ borderRadius: 2, px: 4 }}>
                Free Trial
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
              <AvatarGroup max={4} sx={{ "& .MuiAvatar-root": { width: { xs: 30, sm: 40 }, height: { xs: 30, sm: 40 } } }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Avatar key={i} src={avatar} alt={`User ${i}`} />
                ))}
              </AvatarGroup>
              <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h6" component="span" sx={{ fontSize: { xs: "1.125rem", sm: "1.25rem" } }}>
                  15 Million+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
                  Be part of a growing community
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <img
                src={heroImage}
                alt="Trading App"
                width={isTablet ? 400 : isMobile ? 200 : 500}
                height={isTablet ? 480 : isMobile ? 380 : 600}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  padding: isMobile ? "0 1rem" : 0,
                }}
              />
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}

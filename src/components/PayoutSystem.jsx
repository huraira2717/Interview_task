import { Container, Typography, Box, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import payoutMobile from '../assets/payoutMobile.png';

export default function PayoutSystem() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ my: { xs: 6, md: 12 } }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          flexDirection: { xs: "column", md: "row" }, // Mobile me column, desktop me row
          backgroundColor: theme.palette.mode === 'dark' ? "#1a1a1a" : "#f5f5f5", // Dark background for dark mode
          color: theme.palette.mode === 'dark' ? "#fff" : "#000", // Light text for dark mode, dark text for light mode
          borderRadius: "3rem",
          padding: "0 1rem",
        }}
      >
        <Grid item xs={12} md={7}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                mb: 4,
              }}
            >
              Payout System
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}>
                The default payout ratio for all FTMO Traders is set to 80%, however, an 85% share is not where we draw
                the line.
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}>
                All FTMO Traders can request payout on-demand. The payout can be processed just after 14 days, but you
                don't have the equity to change your mind and continue trading with the entire balance. After the 14-day
                conclusion, we make sure that you will always receive your withdrawal on your most convenient day.
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}>
                If you reach the milestones of our Scaling Plan, not only do we increase the balance of your FTMO
                Account by 25%, your payout ratio will also automatically change to a staggering 90%!
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              sx={{
                position: "relative",
                height: { xs: 350, md: 500 }, // Adjusted height for mobile
                width: "100%",
              }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ position: "absolute", bottom: 10 }}
              >
                <img
                  src={payoutMobile}
                  alt="Smartphone App"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </motion.div>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}

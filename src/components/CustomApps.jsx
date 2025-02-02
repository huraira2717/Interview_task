import { BarChart, CalendarMonth, LockClock } from "@mui/icons-material";
import { Container, Typography, Box, Grid, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const features = [
  {
    icon: <CalendarMonth fontSize="large" />,
    title: "Amazing trading conditions",
    description: "FTMO Solution with a wide choice of assets across the board, with very low commissions and spreads.",
  },
  {
    icon: <LockClock fontSize="large" />,
    title: "Leverage 1:100",
    description: "Use professional trader's leverage to your advantage with no imposed limits on position sizing.",
  },
  {
    icon: <LockClock fontSize="large" />,
    title: "One-time fee only",
    description: "No recurrent charges, no membership or other hidden fees. Moreover, the fee is automatically reimbursed to you with the first Profit Split.",
  },
  {
    icon: <BarChart fontSize="large" />,
    title: "The most popular trading platforms",
    description: "MT4, MT5, cTrader, or DXtrade. Choose yourself!",
  },
  {
    icon: <LockClock fontSize="large" />,
    title: "No limits on trading style!",
    description: "Trade your own trading strategy with no limits or restrictions. You can use EAs, hedging or trade discretionarily.",
  },
  {
    icon: <LockClock fontSize="large" />,
    title: "Trade every instrument you want",
    description: "Forex, Commodities, Indices, Crypto, Stocks, Bonds.",
  },
];

export default function FeaturesSection() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.mode === "dark" ? "#121212" : "#f5f5f5", py: 8, color: theme.palette.mode === "dark" ? "#fff" : "#000" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  sx={{
                    p: 3,
                    bgcolor: theme.palette.mode === "dark" ? "#1c1c1c" : "#ffffff",
                    borderRadius: 2,
                    boxShadow: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": { transform: "translateY(-8px)" },
                    height: 220,
                  }}
                >
                  <Box sx={{ mb: 1 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>{feature.title}</Typography>
                  <Typography variant="body2" color={theme.palette.mode === "dark" ? "grey.400" : "text.secondary"}>{feature.description}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import tabletMokup from "../assets/tablet.png";

const tradingCategories = ["Forex", "Indices", "Crypto", "Commodities", "Custom"];

const tableData = [
  { metric: "Symbol", values: ["Bid Price", "Ask Price", "Spread", "Commissions", "Overall costs"] },
  { metric: "Trading Period", values: ["unlimited", "unlimited", "unlimited", "unlimited", "unlimited"] },
  { metric: "Minimum trading days", values: ["4 days", "4 days", "4 days", "4 days", "4 days"] },
  { metric: "Maximum Daily Loss", values: ["$500", "$500", "$1,000", "$1,200", "$1,000"] },
  { metric: "Maximum Loss", values: ["$1,000", "$1,000", "$1,000", "$1,200", "$1,000"] },
  { metric: "Profit Target", values: ["$1,000", "$1,000", "$1,000", "$1,200", "$1,000"] },
  { metric: "Refundable Fee", values: ["€250", "€250", "€250", "€250", "€250"] },
];

export default function TradingPlatforms() {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Adjust for mobile
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Adjust for tablets

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ my: { xs: 4, sm: 8, md: 12 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                position: "relative",
                perspective: "1000px",
                transformStyle: "preserve-3d",
                height: { xs: "250px", sm: "300px", md: "400px" },
              }}
            >
              <motion.div
                animate={{ rotateX: [0, 2, 0], rotateY: [-2, 2, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <img
                  src={tabletMokup}
                  alt="Trading Platform Interface"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </motion.div>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                mb: 4,
                textAlign: { xs: "center", md: "left" },
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              The most popular retail trading platforms
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                lineHeight: 1.5,
                bgcolor: theme.palette.mode === "dark" ? "#1a1a1a" : "#f5f5f5",
                p: 2,
                borderRadius: "1rem",
                textAlign: "justify",
              }}
            >
              We offer all our clients the best trading solution in the form of our MT4, MT5, cTrader, and xTrader
              accounts powered by data feeds directly from top-tier banks. Trade with institutional-grade execution,
              real-time market conditions with super-raw spreads, very low commission, and no markup to all demo trading
              accounts with virtual funds.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* Tabs Section */}
      <Box sx={{ mt: { xs: 4, md: 6 } }}>
        <Paper sx={{ bgcolor: theme.palette.background.paper, borderRadius: 2, overflow: "hidden" }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              bgcolor: theme.palette.background.paper,
              "& .MuiTab-root": {
                py: 2,
                px: 4,
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: "medium",
                textTransform: "none",
                "&.Mui-selected": {
                  color: "white",
                  fontWeight: "bold",
                  bgcolor: "blue",
                  borderRadius: "30px",
                  mb: "10px",
                },
              },
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            {tradingCategories.map((category, index) => (
              <Tab key={category} label={category} />
            ))}
          </Tabs>

          {isMobile ? (
            <Box sx={{ p: 2 }}>
              {tableData.map((row, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: 2,
                    p: 2,
                    bgcolor: index % 2 === 0 ? theme.palette.background.default : "transparent",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>{row.metric}</Typography>
                  <Typography variant="body1">{row.values[activeTab]}</Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Metrics</TableCell>
                    {tradingCategories.map((category, index) => (
                      <TableCell key={category} align="center" sx={{ fontWeight: "bold" }}>
                        {category}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow key={index} sx={{ "&:nth-of-type(odd)": { bgcolor: theme.palette.background.default } }}>
                      <TableCell>{row.metric}</TableCell>
                      {row.values.map((value, i) => (
                        <TableCell key={i} align="center">{value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </Box>
    </Container>
  );
}

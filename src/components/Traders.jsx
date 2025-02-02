import {
  Container,
  Typography,
  Grid,
  Box,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import traderImage from "../assets/trader.jpeg";

const traders = [
  {
    name: "Sarah Johnson",
    image: traderImage,
    amount: "$76,000",
  },
  {
    name: "Michael Chen",
    image: traderImage,
    amount: "$41,013",
  },
  {
    name: "Alex Thompson",
    image: traderImage,
    amount: "$500,180",
  },
];

export default function TradersSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Stack
      width={"100%"}
      direction={isMobile ? "column-reverse" : "row"} // Mobile pe text ko neeche aur box ko upar karna
      spacing={4}
      sx={{
        mt: { xs: 6, md: 12 },
        mb: { xs: 4, md: 8 },
      }}
    >
      {/* Traders Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          width: isMobile ? "100%" : "70%", // Mobile pe full width, desktop pe 70%
        }}
      >
        {traders.map((trader, index) => (
          <motion.div
            key={index}
            style={{ width: isMobile ? "100%" : "230px" }} // Mobile pe full width, desktop pe 230px
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Box
              sx={{
                bgcolor: isDarkMode ? "grey.900" : "grey.100",
                color: isDarkMode ? "grey.100" : "grey.900",
                borderRadius: 2,
                pb: { xs: 2, md: 3 },
                height: isMobile ? "auto" : "420px", // Mobile pe height auto, desktop pe fixed height
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 2,
                boxShadow: 3,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  bgcolor: isDarkMode ? "grey.800" : "grey.200",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <img
                src={trader.image}
                alt={trader.name}
                style={{
                  border: "2px solid",
                  borderRadius: "20px",
                  borderColor: "primary.main",
                }}
              />
              <Box>
                <Typography
                  variant="body2"
                  color={isDarkMode ? "grey.400" : "grey.600"}
                  gutterBottom
                >
                  Profit Split
                </Typography>
                <Typography
                  variant="h5"
                  color="primary.main"
                  sx={{ fontWeight: "bold" }}
                >
                  {trader.amount}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          textAlign: "center",
          width: isMobile ? "100%" : "30%", // Mobile pe full width, desktop pe 30%
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
            px: 2,
          }}
        >
          Trade for{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Modern Prop Trading Firm
          </Box>
        </Typography>
        <Typography
          sx={{
            mb: { xs: 4, md: 6 },
            px: 2,
          }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text.
        </Typography>
      </Box>
    </Stack>
  );
}

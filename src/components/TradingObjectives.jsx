import {
  Container,
  Typography,
  Box,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
  // Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import traderMobileImage from "../assets/TradingObjectives.png";

export default function TradingObjectives() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="xl"
      sx={{ mb: { xs: 6, md: 12 }, px: { xs: 2, md: 0 } }}
    >
      {" "}
      {/* Added padding for left side */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" }, // Reversed order for mobile
          gap: { xs: 4, md: 8 },
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            flex: 1,
            width: "100%",
            marginLeft: isMobile ? "0" : "200px", // Adjusted margin for mobile and desktop
          }}
        >
          <Box>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
            >
              Know your{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Trading
                <br />
                Objectives
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>

            {/* <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Currency:
                </Typography>
                <Select
                  value="USD"
                  sx={{
                    width: 200,
                    bgcolor: "background.paper",
                    "& .MuiSelect-select": {
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    },
                  }}
                >
                  <MenuItem value="USD">
                    <img src="/us-flag.png" alt="US Flag" width={20} height={15} style={{ marginRight: 8 }} />
                    USD
                  </MenuItem>
                </Select>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Risk:
                </Typography>
                <Select
                  value="Normal"
                  sx={{
                    width: 200,
                    bgcolor: "background.paper",
                  }}
                >
                  <MenuItem value="Normal">Normal</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Balance:
                </Typography>
                <Select
                  value="200000"
                  sx={{
                    width: 200,
                    bgcolor: "background.paper",
                  }}
                >
                  <MenuItem value="200000">$200,000</MenuItem>
                  <MenuItem value="100000">$100,000</MenuItem>
                  <MenuItem value="500000">$500,000</MenuItem>
                </Select>
              </Box>
            </Box> */}

            <Box sx={{ display: "flex", flexDirection: "row",flexWrap: "wrap",gap: 2 }}>
              <Box sx={{ minWidth: 150 }}>
                <Typography sx={{ color: "white", mb: 1 }}>
                  Currency:
                </Typography>
                <Select
                  value={"USD"}
                  sx={{
                    width: "100%",
                    bgcolor: "#2196F3",
                    color: "white",
                    ".MuiOutlinedInput-notchedOutline": { border: "none" },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    ".MuiSvgIcon-root": { color: "white" },
                    borderRadius: "20px",
                  }}
                >
                  <MenuItem value="USD">
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMDIvMTPZVKEFAAAAZElEQVQokd3RQQqAIBCF4Z8u4CG6/1UUukFQm2qhNYZkiAhGBN/qwXyDyIxUnRDCLiKbqq57H2MMF1PvPbz3KKUAACKCnDNSSgCAMQattRhjbM+992itEWO8xkXEp5T2tNR/fQBkzR8vkN0opQAAAABJRU5ErkJggg=="
                        alt="USA flag"
                        style={{ width: 20, height: "auto" }}
                      />
                      USD
                    </Box>
                  </MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="GBP">GBP</MenuItem>
                </Select>
              </Box>

              <Box sx={{ minWidth: 150 }}>
                <Typography sx={{ color: "white", mb: 1 }}>Risk:</Typography>
                <Select
                  value={"Normal"}
                  sx={{
                    width: "100%",
                    bgcolor: "#2196F3",
                    color: "white",
                    ".MuiOutlinedInput-notchedOutline": { border: "none" },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    ".MuiSvgIcon-root": { color: "white" },
                    borderRadius: "20px",
                  }}
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Normal">Normal</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </Box>

              <Box sx={{ minWidth: 150 }}>
                <Typography sx={{ color: "white", mb: 1 }}>Balance:</Typography>
                <Select
                  value={20000}
                  sx={{
                    width: "100%",
                    bgcolor: "#2196F3",
                    color: "white",
                    ".MuiOutlinedInput-notchedOutline": { border: "none" },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    ".MuiSvgIcon-root": { color: "white" },
                    borderRadius: "20px",
                  }}
                >
                  <MenuItem value="100000">$100,000</MenuItem>
                  <MenuItem value="200000">$200,000</MenuItem>
                  <MenuItem value="300000">$300,000</MenuItem>
                </Select>
              </Box>
            </Box>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            flex: 1,
            width: "100%",
            order: isMobile ? 1 : 0, // Reversed order for mobile
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: { xs: 300, md: 400 },
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
            >
              <img
                src={traderMobileImage}
                alt="Trading App Interface"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
}

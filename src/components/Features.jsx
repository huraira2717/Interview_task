import {
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  // Box,
  Typography,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";

// const MotionBox = motion(Box);
// const MotionTypography = motion(Typography);

const features = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: "$180M",
    description: "Paid out to FTMO Traders",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: "180",
    description: "No. of countries with traders registered",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "16M",
    description: "No. of trades opened every month",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "8h",
    description: "Avg payout processing time",
  },
];

const transition = {
  duration: 0.8,
  ease: [0, 0.71, 0.2, 1.01],
};
export default function FeaturesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 20, md: -5, lg: -10 },
        // mt: -10,
        mb: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 6 },
      }}
    >
      <Grid container spacing={isMobile ? 2 : 3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item key={index} xs={6} sm={6} md={3} lg={3}>
            <motion.div
              whileInView={{ y: 0 }}
              initial={{ y: 100 }}
              transition={transition}
            >
              <Paper
                sx={{
                  height: "180px",
                  p: 4,
                  borderRadius: 2,
                  bgcolor: "background.default",
                  boxShadow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: 6,
                    "& .icon": {
                      transform: "scale(1.2)",
                    },
                  },
                }}
              >
                {/* <MotionBox
                className="icon"
                sx={{ mb: 2, color: "primary.main", transition: "transform 0.3s ease-in-out" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
              >
                {feature.icon}
              </MotionBox> */}
                <Typography
                  gutterBottom
                  variant="h4"
                  component="h2"
                  sx={{
                    mb: 2,
                    color: "primary.main",
                    transition: "transform 0.3s ease-in-out",
                    fontWeight: "bold",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {feature.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

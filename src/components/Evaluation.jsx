import { Container, Typography, Box, useMediaQuery, useTheme, Grid } from "@mui/material"
import { Info, Mail, TrendingUp } from "@mui/icons-material"
import { motion } from "framer-motion"

const steps = [
  {
    icon: <Info />,
    title: "WhaleFundr Challenge",
    description:
      "An WhaleFundr Challenge is the first step of the Evaluation Process. You need to succeed here to achieve into the verification stage by following rules and discipline in observing the Trading Objectives.",
  },
  {
    icon: <Mail />,
    title: "Verification",
    description:
      "A Verification is the second and last step of the Evaluation Process. After passing the WhaleFundr Challenge, pass a Verification stage and your account will be offered to trade on an WhaleFundr Account.",
  },
  {
    icon: <TrendingUp />,
    title: "WhaleFundr Trader",
    description:
      "You are becoming an WhaleFundr Trader after the Verification. WhaleFundr Trader can trade consistently and receive up to 90% of profits. Immediately participate in your WhaleFundr Account.",
  },
]

export default function EvaluationProcess() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Container maxWidth="lg" sx={{ my: { xs: 6, md: 12 } }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: { xs: 4, md: 6 },
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        Evaluation Process
      </Typography>

      <Grid container spacing={4} sx={{ position: "relative" }}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 4,
                  p: { xs: 3, md: 6 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  height: "100%",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    border: "2px solid",
                    borderColor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "background.default",
                    mb: 2,
                  }}
                >
                  <Box sx={{ color: "primary.main", fontSize: "2rem" }}>{step.icon}</Box>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ color: "primary.main", fontWeight: "bold" }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ maxWidth: "300px" }}>
                  {step.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

import { Container, Typography, Grid, Paper, Box } from "@mui/material"
import { CalendarMonth, Description, Timer } from "@mui/icons-material"
import { motion } from "framer-motion"

const highlights = [
  {
    icon: <CalendarMonth sx={{ fontSize: 40 }} />,
    title: "Swing Account",
    description:
      "Pick the FTMO Challenge with preferred rules. Swing has no restrictions on holding positions over the weekend or trading during macroeconomic releases.",
  },
  {
    icon: <Description sx={{ fontSize: 40 }} />,
    title: "Scaling Plan",
    description:
      "We aim to forge long-term business relationships. If you manage to be consistent and profitable, we will increase the balance of your FTMO Account by 25% every 4 months.",
  },
  {
    icon: <Timer sx={{ fontSize: 40 }} />,
    title: "Free Trial",
    description:
      "If you are still not sure, you have the option to try a free trial. The Free Trial Account is a shortened version of the FTMO Challenge with the same trading conditions.",
  },
]

export default function KeyHighlights() {
  return (
    <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 12 } }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Key Highlights
        </Typography>

        <Grid container spacing={3}>
          {highlights.map((highlight, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: "primary.main",
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    {highlight.icon}
                    <Typography variant="h6" component="h3">
                      {highlight.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {highlight.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  )
}

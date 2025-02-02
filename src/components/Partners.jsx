import {
  Container,
  Typography,
  Grid,
  Box,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import partner from "../assets/partner3.png";

const partners = Array(8).fill({
  logo: partner,
  alt: "Partner Logo",
});

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

export default function PartnersSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      component={motion.div}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      maxWidth="lg"
      sx={{ mt: { xs: 6, md: 12 }, mb: { xs: 4, md: 8 } }}
    >
      <Typography
        component={motion.h3}
        variants={itemVariants}
        initial="hidden"
        animate="show"
        align="center"
        sx={{
          mb: { xs: 4, md: 6 },
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
          px: 2,
        }}
      >
        <Box component="span" sx={{ color: "primary.main" }}>
          WhaleFundr
        </Box>{" "}
        is one of the most reliable firms
        <br /> in the modern prop trading industry.
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 6, md: 8 } }}>
        {partners.map((partner, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <motion.div
              variants={itemVariants}
              initial={{ y: -100 }}
              whileInView={{ y: 0 }}
              whileHover="hover"
              whileTap="tap"
            >
              <Paper
                elevation={3}
                sx={{
                  bgcolor: "background.default",
                  borderRadius: 2,
                  p: { xs: 2, md: 3 },
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.alt}
                  width={isMobile ? 100 : 150}
                  height={isMobile ? 40 : 60}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

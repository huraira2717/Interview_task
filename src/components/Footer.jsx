
import { Mail, Phone } from "@mui/icons-material"
import { Container, Typography, Box, Grid, Link as MuiLink, useTheme, useMediaQuery, Link } from "@mui/material"
import logo from '../assets/whale-logo 1.png'
import '../App.css'

const footerLinks = {
  "About us": [
    "Evaluation Process",
    "Trading Objectives",
    "Why our FTMO Challenge?",
    "Testimonials",
    "Scaling Plan",
    "Affiliate Programme",
    "Terms & Conditions",
    "Careers",
    "Press Kit",
  ],
  Trading: ["Calendar", "Shop", "FTMO Academy", "Premium Programme", "Trading Journal"],
  Apps: [
    "News Indicator",
    "Quick Trade Manager",
    "Equity Simulator",
    "Monitor App",
    "Trading Journal",
    "Statistical App",
    "Account Analysis",
    "Account MetriX",
  ],
}

const contactInfo = {
  email: "No_Replies@yahoo.com",
  phone: "275-437-1694",
}

export default function Footer() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        pt: { xs: 6, md: 8 },
        pb: 3,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 }}>
              <img src={logo} className="logo" alt="WhaleFundr Logo"  />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Anim distinctio qua amet possimus sit. Voluptatum sunt corrupti iste voluptate itaque hic. Dolore sed quia
              et totam!
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Mail size={16} />
                <MuiLink href={`mailto:${contactInfo.email}`} color="inherit">
                  {contactInfo.email}
                </MuiLink>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone size={16} />
                <MuiLink href={`tel:${contactInfo.phone}`} color="inherit">
                  {contactInfo.phone}
                </MuiLink>
              </Box>
            </Box>
          </Grid>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={12} sm={6} md={3} key={category}>
              <Typography variant="h6" gutterBottom>
                {category}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {links.map((link) => (
                  <Box component="li" key={link} sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: theme.palette.text.secondary,
                        transition: "color 0.2s",
                        ":hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {link}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Disclaimer */}
        <Box sx={{ my: 4 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "0.75rem",
              lineHeight: 1.6,
              textAlign: { xs: "left", md: "justify" },
            }}
          >
            All information provided on this site is intended solely for educational purposes related to trading on
            financial markets and should not be construed as advice. WhaleFundr does not provide investment
            recommendations or advice and should not be relied on as such. Any communication regarding the trading of
            investment instruments. FTMO only provides services of simulated trading and educational tools for trading.
            The information on this site is not directed at residents in any country or jurisdiction where such
            distribution or use would be contrary to local laws or regulations. WhaleFundr is not operating as a broker
            and do not accept any deposits. The offered technical solution for the FTMO platform and data feed is
            powered by industry providers.
          </Typography>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
            pt: 3,
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            2023 © Copyright - FTMO.com Made with for trading
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
            }}
          >
            {["Contact Options", "Privacy Policy", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.secondary,
                  fontSize: "0.875rem",
                  transition: "color 0.2s",
                  ":hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}


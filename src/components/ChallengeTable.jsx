import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material"
import { motion } from "framer-motion"

const tableData = [
  {
    label: "Account balance",
    values: ["$10,000", "$25,000", "$50,000", "$100,000", "$200,000"],
  },
  {
    label: "Trading Period",
    values: ["unlimited", "unlimited", "unlimited", "unlimited", "unlimited"],
  },
  {
    label: "Minimum trading days",
    values: ["4 days", "4 days", "4 days", "4 days", "4 days"],
  },
  {
    label: "Maximum Daily Loss",
    values: ["$500", "$500", "$1,000", "$1,200", "$1,000"],
  },
  {
    label: "Maximum Loss",
    values: ["$1,000", "$1,000", "$1,000", "$1,200", "$1,000"],
  },
  {
    label: "Profit Target",
    values: ["$1,000", "$1,000", "$1,000", "$1,200", "$1,000"],
  },
  {
    label: "Refundable Fee",
    values: ["€250", "€250", "€250", "€250", "€250"],
  },
]

export default function ChallengeTable() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Container   sx={{ mb: { xs: 6, md: 12 } , background: "linear-gradient(rgba(18, 18, 18, 1), rgba(33, 118, 185, 1))" , padding:"20px 10px", borderRadius:"20px"}}>
      <motion.div  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mb: 4,
            fontSize: { xs: "1.5rem", md: "2rem" },
            display:"flex" , justifyContent:"space-between"
            
          }}
        >
          Step: 1{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            WhaleFundr Challenge
          </Box>
        </Typography>

        {isMobile ? (
          // Mobile view - Scrollable cards
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 2,
              pb: 2,
              "::-webkit-scrollbar": {
                height: 6,
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "primary.main",
                borderRadius: 3,
              },
            }}
          >
            {[0, 1, 2, 3, 4].map((columnIndex) => (
              <Paper
                key={columnIndex}
                sx={{
                  minWidth: 280,
                  p: 3,
                  bgcolor: "background.paper",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" sx={{ color: "primary.main", mb: 3 }}>
                  {tableData[0].values[columnIndex]}
                </Typography>
                {tableData.map((row, rowIndex) => (
                  <Box key={rowIndex} sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {row.label}
                    </Typography>
                    <Typography variant="body1">{row.values[columnIndex]}</Typography>
                  </Box>
                ))}
              </Paper>
            ))}
          </Box>
        ) : (
          // Desktop view - Table
          <TableContainer
            component={Paper}
            sx={{
              bgcolor: "background.paper",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Features</TableCell>
                  {tableData[0].values.map((value, index) => (
                    <TableCell
                      key={index}
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        color: "primary.main",
                      }}
                    >
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.slice(1).map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:nth-of-type(odd)": {
                        bgcolor: "background.default",
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.label}
                    </TableCell>
                    {row.values.map((value, valueIndex) => (
                      <TableCell key={valueIndex} align="center">
                        {value}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </motion.div>
    </Container>
  )
}

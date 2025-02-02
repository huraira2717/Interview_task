import { Box, Container, Typography, Button, Stack, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import mobileMockup from '../assets/benefits.png';

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f5f5f5',
    minHeight: '50vh',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    width: "75%", 
    margin: '0 auto',
    borderRadius: "2rem",
    padding: "2rem 1rem",


    [theme.breakpoints.down('lg')]: { 
        width: "90%", 
    },
    [theme.breakpoints.down('md')]: {
        width: "90%",  
        borderRadius: "1.5rem", 
    },
    [theme.breakpoints.down('sm')]: { 
        width: "90%",  
        borderRadius: "0",  
        padding: "1.5rem 1rem"
    }
}));


const PhoneImage = styled('img')({
    maxWidth: '100%', 
    height: 'auto',
    transform: 'rotate(-10deg)',
    filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.3))'
});

function TradingCustomerBenefits() {
    const theme = useTheme();

    return (
        <StyledBox>
            <Container sx={{ my: { xs: 6, md: 12 } }}>
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }} // Reverse order on mobile
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between"
                    position={"relative"}
                >
                    {/* Text Content */}
                    <Box flex={1} textAlign={{ xs: 'center', md: 'left' }}>
                        <Typography
                            variant="h3"
                            component="h1"
                            gutterBottom
                            fontWeight="bold"
                            sx={{
                                fontSize: { xs: '1.8rem', md: '2.5rem' },
                                textAlign: { xs: "center", md: "left" }
                            }}
                        >
                            We are more than just a{' '}
                            <Typography
                                component="span"
                                variant="h3"
                                color="primary"
                                fontWeight="bold"
                                sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
                            >
                                Modern Prop Trading Firm
                            </Typography>
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                mb: 4,
                                textAlign: { xs: "center", md: "left" },
                                fontSize: { xs: "1rem", md: "1.2rem" }
                            }}
                        >
                            Find out how you can benefit with FTMO.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                mb: 4,
                                textAlign: { xs: "center", md: "left" },
                                fontSize: { xs: "1rem", md: "1.2rem" }
                            }}
                        >
                            We've developed several apps for our traders.
                            Some of them will help you with discipline, while others can assist with journaling
                            or analyzing the markets.
                        </Typography>
                        <Box display="flex" justifyContent={{ xs: "center", md: "start" }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    borderRadius: 2,
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem'
                                }}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Box>

                    {/* Image (Now Appears on Top in Mobile) */}
                    <Box
                        flex={1}
                        sx={{
                            display: "flex",
                            justifyContent: "center", 
                            position: "relative",
                            width: "100%"
                        }}
                    >
                        <PhoneImage
                            src={mobileMockup}
                            alt="Trading App"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                transform: "rotate(-10deg)",
                                position: "relative",
                                zIndex: 1
                            }}
                        />
                    </Box>
                </Stack>
            </Container>
        </StyledBox>
    );
}

export default TradingCustomerBenefits;

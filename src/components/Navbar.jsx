import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useTheme,
  useMediaQuery,
  Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const pages = [
  { title: 'How it works', hasDropdown: true, subItems: ['Process', 'Benefits', 'Requirements'] },
  { title: 'FAQ', hasDropdown: false },
  { title: 'Testimonials', hasDropdown: false },
  { title: 'Trading', hasDropdown: true, subItems: ['Forex', 'Crypto', 'Stocks'] },
  { title: 'About Us', hasDropdown: true, subItems: ['Team', 'Mission', 'Contact'] },
  { title: 'Academy', hasDropdown: false }
];

export default function Navbar({ toggleTheme, mode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSubMenuClick = (title) => {
    setOpenSubMenu(openSubMenu === title ? '' : title);
  };

  const drawer = (
    <Box
      sx={{
        width: '100vw',
        height: '100%',
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <List>
        {pages.map((page) => (
          <Box key={page.title}>
            <ListItem button onClick={() => page.hasDropdown && handleSubMenuClick(page.title)}>
              <ListItemText primary={page.title} />
              {page.hasDropdown && (openSubMenu === page.title ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {page.hasDropdown && (
              <Collapse in={openSubMenu === page.title} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {page.subItems.map((item) => (
                    <ListItem button key={item} sx={{ pl: 4 }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'black', 
          boxShadow: 'none',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0,0,0,0.9)' // Adjusted opacity for a slightly lighter black
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
              }}
            >
              WhaleFundr
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" onClick={handleDrawerToggle} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
              }}
            >
              WhaleFundr
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit" onClick={toggleTheme}>
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <Button
                variant="contained"
                sx={{
                  ml: 2,
                  backgroundColor: '#1976d2',
                  '&:hover': { backgroundColor: '#1565c0' }
                }}
                startIcon={<LanguageIcon />}
              >
                ENG
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: '100%', transition: 'transform 0.3s ease-in-out' },
          boxShadow: 'none',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0,0,0,0.9)' // Adjusted opacity for a slightly lighter black
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Autocomplete,
  TextField,
  IconButton,
  Box,
  Badge,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ThemeProvider,
  useThemeProps
} from '@mui/material';
import {
  Search as SearchIcon,
  Phone as PhoneIcon,
  Person as PersonIcon,
  Star as StarIcon,
  ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/img/logo_shop.png'
import theme from '../theme';
import { Container } from 'reactstrap';



const Header = () => {

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  const categories = [
    { label: "Tất cả", value: "all" },
    { label: "Điện thoại", value: "dienthoai" },
    { label: "Máy tính", value: "maytinh" },
    // Thêm các danh mục khác ở đây
  ];

  const drawerContent = (
    <Box sx={{ width: 300 }} role="presentation" onClick={handleDrawerClose} onKeyDown={handleDrawerClose}>
      <img src={Logo}></img>
      <List>
        <ListItem button>
          <Typography variant="h6">Trang chủ</Typography>
        </ListItem>
        <ListItem button>
          <Typography variant="h6">Siêu sale</Typography>
        </ListItem>
        <ListItem button>
          <Typography variant="h6">Sản phẩm</Typography>
        </ListItem>
        <ListItem button>
          <Typography variant="h6">Áo nam</Typography>
        </ListItem>
        <ListItem button>
          <Typography variant="h6">Áo nữ</Typography>
        </ListItem>
        <ListItem button>
          <Typography variant="h6">TeeSpace</Typography>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Container maxWidth="lg">
          <Toolbar>
            {isMobile ? (
              <>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
                  {drawerContent}
                </Drawer>
              </>
            ) : (
              <Grid container mt={3} justifyContent="center" alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="h6" component="div">
                    <img src={Logo} alt="Logo" />
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Autocomplete
                    id="category-select"
                    options={categories}
                    sx={{
                      width: "80%",
                      "& .MuiAutocomplete-inputRoot": {
                        padding: 0,
                      },
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderWidth: 2,
                        },
                        "&.Mui-focused fieldset": {},
                      },
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Danh mục"
                        variant="outlined"
                        placeholder="Tìm kiếm..."
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <React.Fragment>
                              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                                <SearchIcon />
                              </IconButton>
                              {params.InputProps.startAdornment}
                            </React.Fragment>
                          ),
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4} container justifyContent="flex-end" alignItems="center">
                  <Box
                    className="hotline_content"
                    sx={{
                      "&:hover": {
                        padding: "10px",
                        cursor: "pointer",
                        backgroundColor: "#f0f0f0",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconButton aria-label="phone" sx={{ animation: "vibrate 0.5s infinite linear" }}>
                          <PhoneIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="h6" component="h6" className="hotline_content_title">
                          <span>Hotline:</span> 19008188
                        </Typography>
                        <Typography variant="body2" className="hotline_content_dis">
                          Pickup your order for free
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box className="icon_content" ml={3}>
                    <IconButton aria-label="user">
                      <PersonIcon />
                    </IconButton>
                    <IconButton aria-label="star">
                      <Badge badgeContent={4} color="secondary">
                        <StarIcon />
                      </Badge>
                    </IconButton>
                    <IconButton aria-label="shopping cart">
                      <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Toolbar>
        </Container>
        <hr />
        <Toolbar>
          {!isMobile && (
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Tabs
                centered
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "primary.main",
                    height: 3,
                  },
                }}
              >
                <Tab label="Trang chủ" value="trang-chu" />
                <Tab label="Siêu sale" value="sieu-sale" />
                <Tab label="Sản phẩm" value="san-pham" />
                <Tab label="Áo nam" value="ao-nam" />
                <Tab label="Áo nữ" value="ao-nu" />
                <Tab label="TeeSpace" value="teespace" />
              </Tabs>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
    </ThemeProvider>
  );
};

export default Header;

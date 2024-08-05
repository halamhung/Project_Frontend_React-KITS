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
  useThemeProps,
  Container
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
      <Box sx={{ width: '100%', boxShadow: "rgba(0, 0, 0, 1)", }}>
        <AppBar position="fixed" sx={{ width: "100%" }}>
          <Toolbar  >
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
              <Grid container mt={3} justifyContent="center" alignItems="center" px={2}>
                <Grid item md={3} xs={3} container justifyContent="center"  >
                  <Typography variant="h6" component="div">
                    <Box
                      component="img"
                      src={Logo}
                      alt="Logo"
                      sx={{
                        width: '95%', // Chiếm toàn bộ chiều rộng của container
                        maxWidth: '200px', // Giới hạn tối đa chiều rộng
                        height: 'auto',
                      }}
                    />
                  </Typography>
                </Grid>
                <Grid item md={5} xs={5} container justifyContent="center">
                  <Autocomplete
                    id="category-select"
                    options={categories}
                    sx={{
                      width: "100%",
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
                <Grid item md={3} xs={3} container alignItems="center" width={"90%"} sx={{
                  justifyContent: {
                    sm: 'center',
                    md: 'center',
                    lg: 'center'
                  }
                }}>
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
                    <Grid container alignItems="center" sx={{
                      display: {
                        sm: 'none',
                        md: 'none',
                        lg: 'none',
                        xl: 'inline-flex'
                      }
                    }}>
                      <Grid item>
                        <IconButton aria-label="phone" sx={{ animation: "vibrate 0.5s infinite linear" }}>
                          <PhoneIcon />
                        </IconButton>
                      </Grid>
                      <Grid item  >
                        <Typography variant="h6" component="h6" className="hotline_content_title">
                          <span>Hotline:</span> 19008188
                        </Typography>
                        <Typography variant="body2" className="hotline_content_dis">
                          Pickup your order for free
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box className="icon_content" >
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

          <Toolbar sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            {!isMobile && (
              <Box >
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
      </Box>
    </ThemeProvider >
  );
};

export default Header;

import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  Typography,
  Box,
  Autocomplete,
  TextField,
  Tab,
  Tabs,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../assets/img/logo_shop.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

const categories = [
  { label: "Tất cả", value: "all" },
  { label: "Điện thoại", value: "dienthoai" },
  { label: "Máy tính", value: "maytinh" },
  // Thêm các danh mục khác ở đây
];

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ width: "80%", mx: "auto" }}>
        <Toolbar>
          <Grid
            container
            mt={3}
            pl={14}
            pr={14}
            alignItems="center"
            justifyContent="center">
            <Grid item xs={3}>
              {/* Logo */}
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
                    "&.Mui-focused fieldset": {
                      borderColor: "Background", // Đặt màu viền thành transparent khi focus
                    },
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
                          <IconButton
                            type="button"
                            sx={{ p: "10px" }}
                            aria-label="search">
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
            <Grid
              item
              xs={4}
              container
              justifyContent="flex-end"
              alignItems="center">
              {/* Icon giỏ hàng */}

              <Box
                className="hotline_content"
                sx={{
                  // ...các kiểu CSS khác
                  "&:hover": {
                    // Các kiểu CSS khi hover vào Box

                    cursor: "pointer", // Ví dụ: đổi con trỏ chuột thành dạng bàn tay khi hover
                    // Thêm các hiệu ứng khác tùy thích
                    backgroundColor: "#f0f0f0", // Đổi màu nền khi hover
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Thêm đổ bóng khi hover
                    transform: "translateY(-2px)", // Nâng phần tử lên 2px khi hover
                  },
                }}>
                <Grid container alignItems="center">
                  {" "}
                  {/* Căn giữa theo chiều dọc */}
                  <Grid item>
                    <IconButton
                      aria-label="phone"
                      sx={{ animation: "vibrate 0.5s infinite linear" }}>
                      <PhoneIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    {" "}
                    {/* Cho phép Typography chiếm hết không gian còn lại */}
                    <Typography
                      variant="h6"
                      component="h6"
                      className="hotline_content_title">
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
        </Toolbar>
        <hr></hr>
        <Toolbar>
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Tabs
              centered
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "primary.main",
                  height: 3,
                },
              }}>
              <Tab label="Trang chủ" value="trang-chu" />
              <Tab label="Siêu sale" value="sieu-sale" />
              <Tab label="Sản phẩm" value="san-pham" />
              <Tab label="Áo nam" value="ao-nam" />
              <Tab label="Áo nữ" value="ao-nu" />
              <Tab label="TeeSpace" value="teespace" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;

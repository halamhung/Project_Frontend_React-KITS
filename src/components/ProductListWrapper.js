import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Grid, IconButton, Tooltip, Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Product_item from './product_list/Product_item'; // Sửa đường dẫn nếu cần
import { fetchProducts } from '../redux/ProductSlice'; // Sửa đường dẫn nếu cần

const ProductListWrapper = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.products.products);
    const productStatus = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md')); // Check if screen size is 'md' or larger

    useEffect(() => {
        // Fetch products when component mounts
        dispatch(fetchProducts());
    }, [dispatch]);

    if (productStatus === 'Đợi xíu nha') {
        return <div>Loading...</div>;
    }

    if (productStatus === 'Lỗi') {
        return <div>Error loading products: {error}</div>;
    }

    // Giới hạn số lượng sản phẩm hiển thị
    const displayedProducts = productList.slice(0, 4);

    return (
        <div style={{ position: 'relative', padding: theme.spacing(2) }}>
            <Grid container spacing={2}>
                {displayedProducts.length > 0 ? (
                    displayedProducts.map((item, index) => (
                        <Product_item
                            key={index}
                            item={item}
                            index={index}
                        />
                    ))
                ) : (
                    <Grid item xs={12}>
                        <div>No products available.</div>
                    </Grid>
                )}
            </Grid>
            {isMdUp ? (
                <Tooltip title="Xem tất cả sản phẩm">
                    <IconButton
                        component={Link}
                        to="/product"
                        color="primary"
                        sx={{
                            position: 'absolute',
                            right: -30,
                            top: '40%',
                            transform: 'translateY(-50%)',
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark
                            },
                            boxShadow: 3,
                            borderRadius: '50%',
                            padding: 1
                        }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Button
                    component={Link}
                    to="/product"
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 3 }}
                >
                    Xem tiếp
                </Button>
            )}
        </div>
    );
};

export default ProductListWrapper;

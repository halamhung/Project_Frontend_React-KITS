import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { Grid, Box, Container, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import "./Product_list.css";
import Logo from "../../assets/img/banner/banner_product.png";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/ProductSlice';
import Product_item from './Product_item';
import { useNavigate } from 'react-router-dom';

export default function Product_list() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.products.products);
    const productStatus = useSelector((state) => state.products.status);
    const navigate = useNavigate();

    const [sortOption, setSortOption] = useState('');
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        if (productStatus === 'start') {
            dispatch(fetchProducts());
        }
    }, [dispatch, productStatus]);

    useEffect(() => {
        if (productList) {
            let sorted = [...productList];
            switch (sortOption) {
                case 'price-asc':
                    sorted.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    sorted.sort((a, b) => b.price - a.price);
                    break;
                case 'name-asc':
                    sorted.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    sorted.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'best-seller':
                    sorted.sort((a, b) => b.sales - a.sales);
                    break;
                default:
                    break;
            }
            setSortedProducts(sorted);
        }
    }, [sortOption, productList]);

    if (productStatus === 'loading') {
        return <Typography>Loading...</Typography>;
    }

    if (productStatus === 'failed') {
        return <Typography>Error loading products.</Typography>;
    }

    return (
        <Container>
            <Breadcrumb />
            <Box>
                <img className='banner-product' src={Logo} width="900" height="400" alt="Product Banner" />
            </Box>
            <Grid container spacing={2} sx={{ mt: "1px", mb: 1 }}>
                <Grid item xs={12}>
                    <Box className='title-topbar' sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: { xs: 'center', sm: 'space-between' },
                        alignItems: 'center',
                        padding: '20px',
                        backgroundColor: '#f7f7f7',
                        borderRadius: '5px',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                        marginBottom: '20px',
                        height: 'auto',
                        position: 'relative',
                        zIndex: '1',
                        cursor: 'pointer',
                        transition: 'box-shadow 0.3s ease-in-out',
                        '&:hover': {
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        }
                    }}>
                        <Typography className='title-topbar-h1' variant="h1" sx={{
                            alignSelf: { xs: 'center', sm: 'center' },
                            mb: { xs: 2, sm: 0 }
                        }}>
                            Tất cả sản phẩm
                        </Typography>

                        <FormControl sx={{
                            width: { xs: '100%', sm: '50%' },
                            alignSelf: { xs: 'center', sm: 'flex-end' },
                        }}>
                            <InputLabel id="sort-label">Sắp xếp theo</InputLabel>
                            <Select
                                labelId="sort-label"
                                label="Sắp xếp theo"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>Mặc định</em>
                                </MenuItem>
                                <MenuItem value="price-asc">Giá: Thấp đến cao</MenuItem>
                                <MenuItem value="price-desc">Giá: Cao đến thấp</MenuItem>
                                <MenuItem value="newest">Mới nhất</MenuItem>
                                <MenuItem value="oldest">Cũ nhất</MenuItem>
                                <MenuItem value="name-asc">Tên: A-Z</MenuItem>
                                <MenuItem value="name-desc">Tên: Z-A</MenuItem>
                                <MenuItem value="best-seller">Bán chạy nhất</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                {
                    sortedProducts.length > 0 ? sortedProducts.map((item, index) => (
                        <Product_item key={index} item={item} index={index} />
                    )) : (
                        <Typography>Không có sản phẩm nào.</Typography>
                    )
                }
            </Grid>
        </Container>
    );
}

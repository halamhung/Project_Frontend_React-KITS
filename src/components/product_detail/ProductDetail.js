import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Container, Button, TextField } from '@mui/material';
import Img from '../Images';
import { addCart } from '../../redux/CartSlice';
import { fetchProducts } from '../../redux/ProductSlice'; // Import action to fetch products
import Swal from 'sweetalert2';

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    // Find product in Redux store
    const product = useSelector((state) =>
        state.products.products.find((item) => item.id === id)
    );

    useEffect(() => {
        if (!product) {
            dispatch(fetchProducts(id)); // Fetch products if product is not found in the store
        }
    }, [dispatch, product]);

    // Handle case when product is still not found after fetching

    const handle_addCart = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Sản phẩm đã được thêm vào giỏ hàng",
            showConfirmButton: false,
            timer: 1000
        });
        dispatch(addCart({ item: product, quantity }));
    };

    if (!product) {
        return <Typography>Loading...</Typography>; // Show loading state if product is undefined
    }

    const formattedPrice = product.price.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    });

    return (
        <Container>
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4" gutterBottom>{product.product_name}</Typography>
                <img src={Img.all[product.img]} alt={product.product_name} width="100%" />
                <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>{formattedPrice}</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>{product.description}</Typography>
                <TextField
                    type="number"
                    label="Số lượng"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    variant="outlined"
                    inputProps={{ min: 1 }}
                    sx={{ mt: 2 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                    onClick={handle_addCart}
                >
                    Thêm vào giỏ hàng
                </Button>
            </Box>
        </Container>
    );
}
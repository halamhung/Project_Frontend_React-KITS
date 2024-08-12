import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import   
 SearchIcon from '@mui/icons-material/Search';
import Swal from 'sweetalert2';
import Img from '../Images';
import { addCart } from '../../redux/CartSlice';

export default function Product_item(props) {
    const { index, item } = props;
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('M');

    // Định dạng giá theo tiền Việt Nam Đồng
    const formattedPrice = item.price.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    });

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handle_addCart = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Sản phẩm đã được thêm vào giỏ hàng",
            showConfirmButton: false,
            timer: 1000
        });
        dispatch(addCart({ item, quantity })); 
        handleCloseDialog();
    };

    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box sx={{ mb: 3, p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card 
                        sx={{ 
                            width: '100%', 
                            position: 'relative', 
                            overflow: 'hidden',
                            '&:hover .img-hover': { opacity: 1 },
                            '&:hover .magnifier-icon': { 
                                opacity: 1,
                                transform: 'translate(-50%, -50%) scale(1)'
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="auto"
                            image={item.img ? Img.all[item.img] : 'default.jpg'}
                            alt={item.product_name}
                            sx={{ objectFit: 'cover' }}
                        />
                        <CardMedia
                            component="img"
                            height="auto"
                            image={item.img_after ? Img.all[item.img_after] : 'error'}
                            alt={item.product_name}
                            className="img-hover"
                            sx={{ 
                                objectFit: 'cover', 
                                position: 'absolute', 
                                top: 0, 
                                left: 0, 
                                opacity: 0, 
                                transition: 'opacity 0.3s ease-in-out',
                                zIndex: 1
                            }}
                        />
                        <Box 
                            className="magnifier-icon"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%) scale(0)',
                                opacity: 0,
                                transition: 'all 0.3s ease-in-out',
                                zIndex: 2
                            }}
                            onClick={handleOpenDialog}
                        >
                            <SearchIcon sx={{ fontSize: 48, color: 'white' }} />
                        </Box>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                            <Typography 
                                variant="body1" 
                                component="h3" 
                                align="center"
                                sx={{ 
                                    minHeight: '5em', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    textAlign: 'center'
                                }}
                            >
                                {item.product_name}
                            </Typography>
                            <Typography variant="h6" fontWeight={600} color="black" align="center">
                                {formattedPrice}
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                sx={{ mt: 2,
                                    width: "100%"
                                 }} 
                                onClick={handleOpenDialog}
                            >
                                Thêm vào giỏ
                            </Button>
                        </CardContent>
                        <Box className="label_product" sx={{ position: 'absolute', top: 10, left: 10, bgcolor: 'secondary.main', color: 'white', px: 1, py: 0.5 }}>
                            Hàng Mới
                        </Box>
                    </Card>
                </Box>
            </Grid>

            {/* Dialog */}
            <Dialog open={open} onClose={handleCloseDialog}>
                <DialogTitle>Chọn kích thước và số lượng</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" gutterBottom>
                        {item.product_name}
                    </Typography>
                    <Typography variant="h6" fontWeight={600} color="black" gutterBottom>
                        {formattedPrice}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                        <TextField
                            select
                            label="Kích thước"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            SelectProps={{ native: true }}
                            variant="outlined"
                        >
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </TextField>
                        <TextField
                            type="number"
                            label="Số lượng"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            variant="outlined"
                            inputProps={{ min: 1 }}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="secondary">
                        Hủy
                    </Button>
                    <Button onClick={handle_addCart} color="primary">
                        Thêm vào giỏ
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
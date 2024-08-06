import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch } from '../../redux/VoucherSlice';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CircularProgress } from '@mui/material';
import "./Voucher.css"
export default function Voucher() {
    const dispatch = useDispatch();
    const vouchers = useSelector((state) => state.vouchers.vouchers);
    const status = useSelector((state) => state.vouchers.status);
    const error = useSelector((state) => state.vouchers.error);

    useEffect(() => {
        dispatch(fetch());
    }, [dispatch]);

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Danh sách sản phẩm
            </Typography>
            {status === "Đợi xíu nha" && <Typography>Loading...</Typography>}
            {status === "Lỗi" && <Typography color="error">Error: {error}</Typography>}
            <Grid container spacing={3}>
                {vouchers.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="voucher-card">
                            <CardContent className="voucher-content">
                                <div className="voucher-header">
                                    <Typography variant="p">Enjoy Your Gift</Typography>
                                </div>
                                <div className="voucher-body">
                                    <Typography variant="h4">50% OFF</Typography>
                                    <Typography variant="h5">Coupon</Typography>
                                    <Typography variant="body2">Valid until May, 2023</Typography>
                                </div>
                                <div className="voucher-footer">
                                    <Typography variant="h6">87878521112</Typography>
                                </div>
                            </CardContent>
                            <Button variant="contained" color="primary" className="use-button">
                                Use Now
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

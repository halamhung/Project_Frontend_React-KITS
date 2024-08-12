import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { clearCart, removeCart, updateQty } from '../../redux/CartSlice';
import Swal from 'sweetalert2';
import Images from '../../components/Images';

export default function Cart() {
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subTotal = () => {
    let sum = 0;
    carts.forEach((item) => {
      sum += item.qty * item.price;
    });
    return sum;
  };

  const handleClear = () => {
    Swal.fire({
      title: "Bạn chắc chắn muốn xóa?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Đã xóa!",
          text: "Giỏ hàng của bạn đã được xóa.",
          icon: "success",
        });
        dispatch(clearCart());
      }
    });
  };

  const handleNavigateToProducts = () => {
    navigate('/product');
  };

  return (
    <Container maxWidth="lg" className="py-5">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {carts.length === 0 ? (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={300}>
              <Typography variant="h5" gutterBottom>
                Giỏ hàng trống
              </Typography>
              <Button variant="contained" color="primary" onClick={handleNavigateToProducts}>
                Quay lại mua hàng
              </Button>
            </Box>
          ) : (
            <>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img className="img-cart img-fluid" src={Images.all[item.img]} alt={item.product_name} style={{ maxWidth: 80, maxHeight: 80 }} />
                      </td>
                      <td>
                        <Typography variant="body2" noWrap sx={{ maxWidth: 120 }}>
                          {item.product_name}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="body2">{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Typography>
                      </td>
                      <td className="quantity-cell">
                        <ButtonGroup variant="contained" orientation="vertical">
                          <Button onClick={() => dispatch(updateQty({ flag: false, id: item.id }))} sx={{ width: 'auto' }}>
                            <RemoveIcon />
                          </Button>
                          <Typography variant="body2" sx={{ mx: 1 }}>{item.qty}</Typography>
                          <Button onClick={() => dispatch(updateQty({ flag: true, id: item.id }))} sx={{ width: 'auto' }}>
                            <AddIcon />
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>
                        <Typography variant="body2">{(item.price * item.qty).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Typography>
                      </td>
                      <td>
                        <IconButton color="error" onClick={() => dispatch(removeCart(item.id))}>
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="contained" color="secondary" onClick={handleClear}>
                Xóa giỏ hàng
              </Button>
            </>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Box bgcolor="background.paper" borderRadius={2} p={3} boxShadow={1}>
            <Typography variant="h5" gutterBottom>
              Tổng giỏ hàng
            </Typography>
            {carts.length === 0 ? (
              <>
                <Typography variant="body2">Không có món hàng để thanh toán</Typography>
                <Typography variant="body2">Phí vận chuyển: 0 VND</Typography>
              </>
            ) : (
              <>
                <Box display="flex" flexDirection="column" gap={2}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2">Tạm tính:</Typography>
                    <Typography variant="body2">{subTotal().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2">Phí vận chuyển:</Typography>
                    <Typography variant="body2">30.000 VND</Typography>
                  </Box>
                  <Typography variant="body2" align="right">
                    Giao hàng đến TP.HCM
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center" borderTop="1px solid #ccc" pt={2}>
                    <Typography variant="h6">Tổng cộng:</Typography>
                    <Typography variant="h6">{(subTotal() + 30000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Typography>
                  </Box>
                </Box>
              </>
            )}
            <Button variant="contained" color="primary" fullWidth disabled={carts.length === 0}>
              {carts.length === 0 ? 'Không có món hàng để thanh toán' : 'Tiến hành thanh toán'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

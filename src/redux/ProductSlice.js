import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
const initialState = {
    products: [],
    status: "start",
    error: "",
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const url = 'https://66a07cf47053166bcabb954e.mockapi.io/Product';
    const res = await axios.get(url);
    return res.data;
})

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'Đợi xíu nha';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'Hoàn thành';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'Lỗi';
                state.error = action.error.message;
            });
    },
});
export default ProductSlice.reducer;
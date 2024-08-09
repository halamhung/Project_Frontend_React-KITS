import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

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
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.products = action.payload;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});
export default ProductSlice.reducer;
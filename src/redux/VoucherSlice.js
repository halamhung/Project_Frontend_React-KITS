
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    vouchers: [],
    status: 'start',
    error: '',
};

export const fetch = createAsyncThunk('vouchers/fetch', async () => {
    const url = 'https://66a07cf47053166bcabb954e.mockapi.io/Voucher';
    const res = await axios.get(url);
    return res.data;
});

const VoucherSlice = createSlice({
    name: 'vouchers',
    initialState,
    reducers: {
        // Khai báo reducer cho deleteproduct
        deleteproduct: (state, action) => {
            state.vouchers = state.vouchers.filter(voucher => voucher.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetch.pending, (state) => {
                state.status = 'Đợi xíu nha';
            })
            .addCase(fetch.fulfilled, (state, action) => {
                state.status = 'Hoàn thành';
                state.vouchers = action.payload;
            })
            .addCase(fetch.rejected, (state, action) => {
                state.status = 'Lỗi';
                state.error = action.error.message;
            });
    },
});
export default VoucherSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";

const initialState = {
    carts: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    status: 'idle',
    error: null,
    products: []
}
// 
const url = "https://66a07cf47053166bcabb954e.mockapi.io/Product"
let data = []
axios.get(url)
    .then(function (res) {
        data = res.data
    })
    .catch(function (error) {
        console.log(error)
    })


const CartSlice = createSlice({
    name: 'carts',
    initialState,


    reducers: {

         addCart: (state, action) => {
            const { item, quantity } = action.payload;
            const index = state.carts.findIndex(cartItem => cartItem.id === item.id);
            
            if (index >= 0) {
                state.carts[index].qty += parseInt(quantity);  // Cộng số lượng vào sản phẩm hiện có
            } else {
                state.carts.push({ ...item, qty: parseInt(quantity) });  // Thêm sản phẩm mới với số lượng được chọn
            }
            localStorage.setItem("carts", JSON.stringify(state.carts));
        },
        removeCart: (state, action) => {
            state.carts = state.carts.filter(item => item.id !== action.payload)
            localStorage.setItem("carts", JSON.stringify(state.carts))
        },
        clearCart: (state) => {
            state.carts = []
            localStorage.setItem("carts", JSON.stringify(state.carts))
        },
        updateQty: (state, action) => {
            if (action.payload.flag) {
                state.carts = state.carts.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
                localStorage.setItem("carts", JSON.stringify(state.carts))
            } else {

                state.carts = state.carts.map(item => item.id === action.payload.id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty } : item)
                localStorage.setItem("carts", JSON.stringify(state.carts))
            }
        }

    }
})

export const { addCart, removeCart, clearCart, setError, setLoanding, setLoaded, updateQty } = CartSlice.actions
export default CartSlice.reducer
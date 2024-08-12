import { configureStore } from "@reduxjs/toolkit";
import VoucherSlice from "./VoucherSlice";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    vouchers: VoucherSlice,
    products: ProductSlice,
    carts: CartSlice,
  },
});
export default store;

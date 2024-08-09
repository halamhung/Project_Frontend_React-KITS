import { configureStore } from "@reduxjs/toolkit";
import VoucherSlice from "./VoucherSlice";
import ProductSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    vouchers: VoucherSlice,
    products: ProductSlice,
  },
});
export default store;

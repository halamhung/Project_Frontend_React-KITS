import { configureStore } from "@reduxjs/toolkit";
import VoucherSlice from "./VoucherSlice";

const store = configureStore({
  reducer: {
    vouchers: VoucherSlice,
  },
});
export default store;

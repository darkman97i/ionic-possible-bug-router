import { createStore } from 'vuex';
import error from "@/store/modules/error";

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    error
  }
});

export default store;

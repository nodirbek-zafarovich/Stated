import { configureStore } from '@reduxjs/toolkit';
import  ThemeMode  from '../reduce/Theme';



export default configureStore({
  reducer: {
    mode: ThemeMode,
  },
});
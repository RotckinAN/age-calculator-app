import { configureStore } from '@reduxjs/toolkit';
import inputValuesReducer from './inputValuesSlice';

export default configureStore({
   reducer: {
      inputValues: inputValuesReducer,
   },
});

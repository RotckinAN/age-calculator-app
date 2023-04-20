import { createSlice } from '@reduxjs/toolkit';

const inputValuesSlice = createSlice({
   name: 'inputValues',
   initialState: {
      daysInputValue: '',
      monthsInputValue: '',
      yearsInputValue: '',
      daysInputValid: null,
      monthsInputValid: null,
      yearsInputValid: null,
      totalDay: '- -',
      totalMonths: '- -',
      totalYears: '- -',
   },
   reducers: {
      getDaysInputValue(state, action) {
         state.daysInputValue = +action.payload;
      },
      getMonthsInputValue(state, action) {
         state.monthsInputValue = +action.payload;
      },
      getYearsInputValue(state, action) {
         state.yearsInputValue = +action.payload;
      },
      getAge(state, action) {
         const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
         const date = new Date();
         let d2 = date.getDate();
         let m2 = 1 + date.getMonth();
         let y2 = date.getFullYear();

         state.daysInputValue
            ? (state.daysInputValid = true)
            : (state.daysInputValid = false);

         state.monthsInputValue
            ? (state.monthsInputValid = true)
            : (state.monthsInputValid = false);

         state.yearsInputValue
            ? (state.yearsInputValid = true)
            : (state.yearsInputValid = false);

         if (state.daysInputValue > months[state.monthsInputValue - 1]) {
            state.daysInputValid = false;
         }

         if (
            !state.daysInputValid ||
            !state.monthsInputValid ||
            !state.yearsInputValid
         ) {
            state.totalDay = '- -';
            state.totalMonths = '- -';
            state.totalYears = '- -';
         }

         if (
            state.daysInputValue &&
            state.monthsInputValue &&
            state.yearsInputValue &&
            state.daysInputValid
         ) {
            if (state.daysInputValue > d2) {
               d2 += months[m2 - 1];
               m2 -= -1;
            }
            if (state.monthsInputValue > m2) {
               m2 += 12;
               y2 -= 1;
            }
            state.totalDay = d2 - state.daysInputValue;
            state.totalMonths = m2 - state.monthsInputValue;
            state.totalYears = y2 - state.yearsInputValue;
         }
      },
   },
});

export const {
   getDaysInputValue,
   getMonthsInputValue,
   getYearsInputValue,
   getAge,
} = inputValuesSlice.actions;
export default inputValuesSlice.reducer;

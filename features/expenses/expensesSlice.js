import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.items.push(action.payload);
        },
        removeExpense: (state, action) => {
            state.items = state.items.filter(expense => expense.id !== action.payload);
        },
    },
});

export const { addExpense, removeExpense } = expensesSlice.actions;
export default expensesSlice.reducer;

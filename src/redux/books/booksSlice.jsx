import { createSlice } from '@reduxjs/toolkit';
// import bookItems from '../../bookItems';

// const initialState = {
//   books: [],
// };

const booksSlice = createSlice({
  name: 'books',
  initialState: [],

  reducers: {
    addBook(state, action) {
      state.push(action.payload);
    },
    removeBook(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },

  },
});

const { addBook, removeBook } = booksSlice.actions;
export { addBook, removeBook };
export default booksSlice.reducer;

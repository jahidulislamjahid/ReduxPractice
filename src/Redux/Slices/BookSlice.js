import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";


export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async () => {
        const response = await fetch('https://redux-book-shelf.herokuapp.com/books')
        .then(res => res.json());
        return response.data
    }
);
const bookSlice = createSlice({
    name: "books",
    initialState: {
        discover: [],
        readingList: [],
        finishedList: [],
    },
    reducers: {
        addToReadingList: (state, action) => {
            state.readingList.push(action.payload);
        },
        removeFromReadingList: (state, action) => {
            state.readingList = state.readingList.filter(book => book.id !== action.payload);
        }      
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.discover = action.payload;
        })
    }
})

export const { addToReadingList, removeFromReadingList } = bookSlice.actions;
export default bookSlice.reducer;
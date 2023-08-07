import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    questions: [],
    error: '',
}

const fetchQuestions = createAsyncThunk('questions/fetchQuestions', (id) => {
    return fetch(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`)
        .then(res => res.json())
        .then(data => data);
});

const questionsSlice = createSlice({
    name: "questions", initialState, extraReducers: (builder) => {
        builder.addCase(fetchQuestions.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.loading = false;
            state.questions = action.payload.results;
            state.error = '';
        });
        builder.addCase(fetchQuestions.rejected, (state, action) => {
            state.loading = false;
            state.questions = '';
            state.error = action.error.message;
        });
    }
})

export default questionsSlice.reducer;
export { fetchQuestions };
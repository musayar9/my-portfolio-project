import { createSlice } from "@reduxjs/toolkit";
import { fetchClient, fetchArticle } from "./client";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    data: [],
    article: [],
    dataStatus: "idle",
    articleStatus: "idle",
    error: "",
    sendFormModal: false,
  },
  reducers: {
    sendFormMail: (state, action) => {
      state.sendFormModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    //fetchClient
    builder.addCase(fetchClient.pending, (state) => {
      state.dataStatus = "loading";
    });
    builder.addCase(fetchClient.fulfilled, (state, action) => {
      state.data = action.payload;
      state.dataStatus = "succeeded";
    });
    builder.addCase(fetchClient.rejected, (state, action) => {
      state.dataStatus = "failed";
      state.error = action.error;
    });
    //fetchArticle
    builder.addCase(fetchArticle.pending, (state, action) => {
      state.articleStatus = "loading";
    });
    builder.addCase(fetchArticle.fulfilled, (state, action) => {
      state.articleStatus = "succeeded";
      state.article = action.payload;
    });
    builder.addCase(fetchArticle.rejected, (state, action) => {
      state.articleStatus = "failed";
      state.error = action.error;
    });
  },
});

export const { sendFormMail } = portfolioSlice.actions;
export default portfolioSlice.reducer;

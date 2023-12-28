import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient } from "contentful";

const client = createClient({
  space: "7trciuutlq82",
  environment: "master",
  accessToken:import.meta.env.VITE_API_KEY,
});

export const fetchClient = createAsyncThunk(
  "portfolio/fetchClient",
  async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });

      const data = response.items.map((item)=>{
        const {title, url, image, videos } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file.url;
        const video = videos?.fields?.file.url;
        return {title, url, id, img, video}

      })
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    data: [],
    dataStatus: "idle",
    error: "",
    sendFormModal: false
  },
  reducers: {
    sendFormMail:(state, action)=>{
      state.sendFormModal = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClient.pending, (state) => {
      state.dataStatus = "loading";
    });
    builder.addCase(fetchClient.fulfilled, (state, action) => {
      state.data = action.payload;
      state.dataStatus = "succeeded";
    });
    builder.addCase(fetchClient.rejected, (state, action) => {
      state.dataStatus = "failed";
      state.error = action.payload;
    });
  },
});

export const {sendFormMail} = portfolioSlice.actions;
export default portfolioSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";

import { createClient } from "contentful";
export const client = createClient({
  space: "7trciuutlq82",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const fetchClient = createAsyncThunk(
  "portfolio/fetchClient",
  async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      console.log(response);
      const data = response.items.map((item) => {
        const { title, url, image, videos, github } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file.url;
        const video = videos?.fields?.file.url;
        return { title, url, id, img, video, github };
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);


export const fetchArticle = createAsyncThunk("article/fetchArticle", async()=>{
try {
    const response = await client.getEntries({content_type:"article"});
    console.log(response);
    const data = response.items.map((item)=>{
    const {title, url, image, description } = item.fields;
    const id=item.sys.id;
    const img =  image.fields.file.url
    return {title, url, img, id, description}
    })
    return data;
    
} catch (error) {
        throw new Error(error)
}
}

)
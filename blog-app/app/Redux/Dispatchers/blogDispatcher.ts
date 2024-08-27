import BlogServices from "@/app/Services/blogsServices";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (_, { rejectWithValue }) => {
    try {
      const response = await BlogServices.get_blogs();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  
  export const fetchSingleBlog = createAsyncThunk(
    'blogs/fetchSingleBlog',
    async (blogId: string, { rejectWithValue }) => {
      try {
        const response = await BlogServices.get_singleblog(blogId);
        return response;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
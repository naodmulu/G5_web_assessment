// blogsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BlogServices from '@/app/Services/blogsServices';

interface BlogState {
  blogs: any[];
  singleBlog: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  singleBlog: null,
  loading: false,
  error: null,
};

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

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchSingleBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.singleBlog = action.payload;
      })
      .addCase(fetchSingleBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default blogsSlice.reducer;

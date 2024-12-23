import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

interface Asset {
  ca: string;
  token: string;
  age: string;
  currentPrice: number;
  marketCap: number;
  fdv: number;
  avgInvestPrice: number;
  totalInvested: number;
  pnl: number;
  holdings: number;
}

interface AssetsState {
  items: Asset[];
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
  };
  filters: {
    sortBy: string;
    sortOrder: "asc" | "desc";
    search: string;
  };
}

const initialState: AssetsState = {
  items: [],
  loading: false,
  error: null,
  pagination: {
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
    totalItems: 0,
  },
  filters: {
    sortBy: "token",
    sortOrder: "desc",
    search: "",
  },
};

export const fetchAssets = createAsyncThunk(
  "assets/fetchAssets",
  async ({ page, filters }: { page: number; filters: any }) => {
    const response = await api.get("/api/assets", {
      params: {
        page,
        pageSize: 10,
        ...filters,
      },
    });
    return response.data;
  }
);

export const initializeAssets = createAsyncThunk(
  "assets/initialize",
  async () => {
    const response = await api.get("/api/assets/initial");
    return response.data;
  }
);

const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.pagination.currentPage = 1;
    },
    setPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.pagination.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      // Initialize Assets
      .addCase(initializeAssets.pending, (state) => {
        state.loading = true;
      })
      .addCase(initializeAssets.fulfilled, (state, action) => {
        state.items = action.payload.assets;
        state.pagination = action.payload.pagination;
        state.loading = false;
      })
      .addCase(initializeAssets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to initialize assets";
      })
      // Fetch Assets
      .addCase(fetchAssets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAssets.fulfilled, (state, action) => {
        state.items = action.payload.assets;
        state.pagination = action.payload.pagination;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAssets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch assets";
      });
  },
});

export const { setFilters, setPage, resetFilters } = assetsSlice.actions;
export default assetsSlice.reducer;

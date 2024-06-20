import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {MuseumModel} from '@/modules/museum/domain/museum.model';

export const initialState: MuseumModel.State = {
  museums: {
    status: 'idle',
    data: [],
    error: null,
  },
};

export const museumSlice = createSlice({
  name: 'museum',
  initialState,
  reducers: {
    handleMuseumsLoading: state => {
      state.museums.status = 'loading';
      state.museums.error = null;
    },
    handleMuseumsError: (state, action: PayloadAction<string>) => {
      state.museums.status = 'error';
      state.museums.error = action.payload;
    },
    storeMuseums: (state, action: PayloadAction<MuseumModel.Museum[]>) => {
      state.museums.data = action.payload;
      state.museums.status = 'success';
    },
  },
});

export const museumReducer = museumSlice.reducer;
export const museumActions = museumSlice.actions;

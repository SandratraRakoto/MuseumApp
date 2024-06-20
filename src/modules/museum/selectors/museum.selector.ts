import {AppState} from '@/store/store';

export const selectMuseum = (state: AppState) => state.museum.museums;
export const selectMuseumById = (id: string) => (state: AppState) =>
  state.museum.museums.data.find(museum => museum.id === id);

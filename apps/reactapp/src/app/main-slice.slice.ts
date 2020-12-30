import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const MAIN_SLICE_FEATURE_KEY = 'mainSlice';

/*
 * Update these interfaces according to your requirements.
 */
export interface MainSliceEntity {
  id: number;
  name : string;
}

export interface MainSliceState extends EntityState<MainSliceEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const mainSliceAdapter = createEntityAdapter<MainSliceEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchMainSlice())
 * }, [dispatch]);
 * ```
 */
export const fetchMainSlice = createAsyncThunk(
  'mainSlice/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getMainSlices()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialMainSliceState: MainSliceState = mainSliceAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const mainSliceSlice = createSlice({
  name: MAIN_SLICE_FEATURE_KEY,
  initialState: initialMainSliceState,
  reducers: {
    add: mainSliceAdapter.addOne,
    remove: mainSliceAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainSlice.pending, (state: MainSliceState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchMainSlice.fulfilled,
        (state: MainSliceState, action: PayloadAction<MainSliceEntity[]>) => {
          mainSliceAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchMainSlice.rejected, (state: MainSliceState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const mainSliceReducer = mainSliceSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(mainSliceActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const {add , remove } = mainSliceSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllMainSlice);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = mainSliceAdapter.getSelectors();

export const getMainSliceState = (rootState: unknown): MainSliceState =>
  rootState[MAIN_SLICE_FEATURE_KEY];

export const selectAllMainSlice = createSelector(getMainSliceState, selectAll);

export const selectMainSliceEntities = createSelector(
  getMainSliceState,
  selectEntities
);

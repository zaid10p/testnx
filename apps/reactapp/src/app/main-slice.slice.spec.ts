import {
  fetchMainSlice,
  mainSliceAdapter,
  mainSliceReducer,
} from './main-slice.slice';

describe('mainSlice reducer', () => {
  it('should handle initial state', () => {
    const expected = mainSliceAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(mainSliceReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchMainSlices', () => {
    let state = mainSliceReducer(undefined, fetchMainSlice.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = mainSliceReducer(
      state,
      fetchMainSlice.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = mainSliceReducer(
      state,
      fetchMainSlice.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});

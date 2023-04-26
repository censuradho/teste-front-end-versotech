import {
  initialState,
  pokemonReducer as reducer
} from './slice'

describe('pokemon reducers', () => {
  it ('should return initial state', () => {
    expect(
      reducer(
        undefined,
        { type: undefined }
      )
    ).toEqual(initialState)
  })
})
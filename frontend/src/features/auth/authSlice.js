// Here our reducers and initial state will be
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

// Initial state that pertains to the user part of authentication
const initialState = {
  // If there is a user in local storage then have the value of that user if not have value of null.
  user: user ?  user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// slice
export const authSlice = createSlice({
  // name of slice
  name: 'auth',
  // Slice initial state will be the initial state we have above
  initialState: initialState,
  // Define reducers. All reducers here will not be asynchronous / thunkfunctions. They will be inside extra reducers.
  reducers: {
    // The only regular reducer we want is a function called reset to reset the state to our default values.
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isError = false
      state.message = ''
    }
  },
  extraReducers: () => {}
})
// To export reset reducer we need to use authslice.actions
export const {reset} = authSlice.actions
// Export the authslice reducer
export default authSlice.reducer
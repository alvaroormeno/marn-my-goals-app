import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import goalService from '../goals/goalService'

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

//Create new goal thunk function
export const createGoal = createAsyncThunk('goals/create', async (goalData, thunkAPI) => {
  try{
    const token = thunkAPI.getState().auth.user.token
    return await goalService.createGoal(goalData, token)

  } catch (error) {
     // save erros to message variable... if any of the following exist then save to const message
     const message = (error.response && error.response.data & error.response.data.message) || error.message || error.toString()
     // use thunkapi method rejectWithValue and pass in the message to send the message as payload
     return thunkAPI.rejectWithValue(message)
  }
})

// get user goals
export const getGoals = createAsyncThunk('goals/getAll', async(_, thunkAPI) => {
  try {

    const token = thunkAPI.getState().auth.user.token
    return await goalService.getGoals(token)
    
  } catch (error) {
         // save erros to message variable... if any of the following exist then save to const message
         const message = (error.response && error.response.data & error.response.data.message) || error.message || error.toString()
         // use thunkapi method rejectWithValue and pass in the message to send the message as payload
         return thunkAPI.rejectWithValue(message)
  }
})

// create the slice
export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
    .addCase(createGoal.pending, (state) => {
      state.isLoading = true
    })
    .addCase(createGoal.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.goals.push(action.payload)
    })
    .addCase(createGoal.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
    .addCase(getGoals.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getGoals.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.goals = action.payload
    })
    .addCase(getGoals.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
  }
})



export const {reset} = goalSlice.actions
export default goalSlice.reducer
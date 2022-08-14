import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}
/* eslint-disable no-param-reassign */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = '/api/auth'

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData)
      return response.data
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || 'Registration failed',
      )
    }
  },
)

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials)
      const {token, user} = response.data.data
      Cookies.set('jwt_token', token, {expires: 30})
      return {token, user}
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Login failed')
    }
  },
)

const initialState = {
  user: null,
  token: Cookies.get('jwt_token') || null,
  loading: false,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      Cookies.remove('jwt_token')
      state.user = null
      state.token = null
      state.success = false
    },
    resetAuth: state => {
      state.loading = false
      state.error = null
      state.success = false
    },
  },
  extraReducers: builder => {
    builder
      // Register
      .addCase(registerUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, state => {
        state.loading = false
        state.success = true
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Login
      .addCase(loginUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.success = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const {logout, resetAuth} = authSlice.actions
export default authSlice.reducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  title: '',
  description: '',
  type: 'success' // 'success', 'error', 'warning', 'info'
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.visible = true;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.type = action.payload.type || 'success';
    },
    hideToast: (state) => {
      state.visible = false;
      state.title = '';
      state.description = '';
      state.type = 'default';
    }
  }
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer
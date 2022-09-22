
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   updating: 0,
}

export const studentsSlice = createSlice({
   name: 'crud',
   initialState,
   reducers: {
      update: (state, action) => {
         state.updating = action.payload
      },
      clean: (state) => state = { ...initialState }
   }
})

export const { update, clean } = studentsSlice.actions
export default studentsSlice.reducer
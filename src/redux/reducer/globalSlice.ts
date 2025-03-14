import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialGlobalState } from "../util/reducerUtil";
import { GlobalState } from "../interface/GlobalState";

const globalSlice = createSlice({
  name: "global",
  initialState: initialGlobalState,
  reducers: {
    updateGlobalState: (state, action: PayloadAction<{ key: keyof GlobalState; value: any }>) => {
      const { key, value } = action.payload;
      (state[key] as any) = value;
    },
  },
});

export const { updateGlobalState } = globalSlice.actions;
export default globalSlice.reducer;

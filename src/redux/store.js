import { configureStore } from "@reduxjs/toolkit";
import  noteSlice  from "./notes/notesSlice";

export const store = configureStore({
    reducer: {
        notes: noteSlice,
    }
})
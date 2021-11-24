import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
    name : 'notes',
    initialState : {
        items : localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
    },
    reducers : {
        addNote: (state, action) => {
            state.items.push(action.payload)
            localStorage.setItem('items', JSON.stringify(state.items))    
        },
        removeNote: (state, action) => {
            let toDelete = state.items.find(element => element.content === action.payload)
            let index = state.items.indexOf(toDelete)
            state.items.splice(index,1)
            localStorage.setItem('items', JSON.stringify(state.items))    
        }
    },
})

export const { addNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
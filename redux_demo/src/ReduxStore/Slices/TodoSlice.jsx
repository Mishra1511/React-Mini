import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const fetchAllToDos= createAsyncThunk('fetchToDosfrom server', async()=>{
    const data=await fetch('https://jsonplaceholder.typicode.com/todos');
    const Todos= await data.json();
    return Todos;
})

const ToDoSlice = createSlice({
    name:"todos",
    initialState:[],
    extraReducers: (builder) =>{
        builder.addCase(fetchAllToDos.fulfilled,(state,action) =>{
            state=action.payload;
            return state;
        })
    }
})

export default ToDoSlice.reducer;
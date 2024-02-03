import {configureStore} from '@reduxjs/toolkit';
import counter from './Slices/Counter';
import todos from './Slices/TodoSlice';

export const store= configureStore({
    reducer:{
        counter,
        todos
    }
})

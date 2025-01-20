import {createSlice, nanoid} from '@reduxjs/toolkit';
// nanoid - used to generate ids
// createSlice - used to create a slice of the state
const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState, // every slice has one
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),   // generate a unique id
                text: action.payload, // get the text from the action
            } // create a new todo object
            state.todos.push(todo) // add the todo to the todos array

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload) // remove the todo with the id from the todos array
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload // get the id and text from the action
            const todo = state.todos.find(todo => todo.id === id) // find the todo with the id
            if (todo) {
                todo.text = text // update the text of the todo
            }
        }
    },// properties and functions that will change the state
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions // export the actions

export default todoSlice.reducer // export the reducer
import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [
        { id: 1, title: "First todo", completed: false },
        { id: 2, title: "Second todo", completed: true },
    ],
    addTodo: (title) => {},
    updateTodo: (id, title) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
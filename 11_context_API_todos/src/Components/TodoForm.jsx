import { TodoContext } from "../contexts";
import { useState } from "react";
import { useContext } from "react";

function TodoForm() {
    const [todo, setTodo] = useState('');
    const { addTodo } = useContext(TodoContext);

    const add = (e) => {
        e.preventDefault();
        if (!todo.trim()) return;
        addTodo(todo);  // we are passing the todo-text directly since the logic 
        // to make object is handled in addTodo method.
        setTodo('');
    }
    return (
        <form  className="flex">
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onSubmit={add} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


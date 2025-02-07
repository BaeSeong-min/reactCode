import TodoItem from "./TodoItem.jsx"
import { useTodos } from "../../context/TodoContext.jsx"

function TodoList() {
  const todos = useTodos();
  return (
    <ul>
      {todos.map(item => 
        <li key={item.id}>
          <TodoItem 
            item={item}
          />
        </li>
      )}
    </ul>
  )
}

export default TodoList
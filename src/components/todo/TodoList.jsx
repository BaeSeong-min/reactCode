import TodoItem from "./TodoItem.jsx"
import { useTodos } from "../../context/TodoContext.jsx"

function TodoList() {
  const todos = useTodos();
  return (
    <> 
      <div>
        <input id="isDone" type="checkbox" />
        <label htmlFor="isDone">완료된 항목 보기(3/5)</label>
      </div>
      <ul>
        {todos.map(item => 
          <li key={item.id}>
            <TodoItem 
              item={item}
            />
          </li>
        )}
      </ul>   
    </>
  )
}

export default TodoList
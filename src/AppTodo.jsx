import './App.css';
import TodoList from './components/todo/TodoList' 
import AddTodo from './components/todo/AddTodo';
import { TodoContext, TodoDispatchContext, TodoProvider } from './context/TodoContext';

function AppTodo(props) {

  return (
    <TodoProvider>
      <h2>할일목록</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default AppTodo;
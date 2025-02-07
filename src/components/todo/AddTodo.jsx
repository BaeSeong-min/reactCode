import { useState } from "react";
import { useTodosDispatch, useTodos } from "../../context/TodoContext";

export default function AddTodo() {
  const [todoText, setTodoText] = useState('');

  const todos = useTodos();
  const dispatch = useTodosDispatch();

  //1] added
  const handleAddTodo = (text) => {
    dispatch({ // dispatch는 오직 action 객체만 전달받음. 현재 상태 state는 useRender 함수가 자동으로 내가 정의한 reducer 함수에 전달한다.
      type: 'added',
      nextId: todos.length,
      todoText: text
    });
  }

  return (
    <div>
      <input 
        type='text' 
        value={todoText} 
        onChange={(e)=> setTodoText(e.target.value)} 
        onKeyDown={(e) => {
          if(e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            handleAddTodo(e.target.value);
            setTodoText('');
          }
        }}
      />
      <button onClick={() => {

        setTodoText('');
        handleAddTodo(todoText);
      }}>추가</button>
    </div>
  )
}
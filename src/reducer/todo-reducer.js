export default function todoReducer(draft, action) { // useImmerReducer를 사용하면, 객체 혹은 배열인 state를 직접적으로 수정 가능해진다. Immer 내부적으로 새로운 객체를 생성하기에 가능하다. 
  switch(action.type) {
    case 'added': {
      const { nextId, todoText } = action;
      draft.push({ id: nextId, text: todoText, done: false});
      break; // return을 하든 break를 하든 코드의 수행을 꼭 끝내야 한다. 잊지 않고 빠져나가기!!
    }
    case 'added_index': {
      const { insertAt, nextId, todoText } = action; 
      draft.splice(insertAt, 0, { id: nextId, text: todoText, done: false});
      break;
    }
    case 'deleted': {
      const { deleteId } = action;
      return draft.filter(item => item.id != deleteId); // 원본 배열을 수정하진 않지만 새로운 배열을 반환해서 state가 업데이트 됨.
    }
    case 'done': {
      const { id, done } = action;
      const target = (draft.find((item) => item.id === id));
      target.done = done;
      break;
    }
  
    case 'reverse': {
      return draft.toReversed()
    }
    default: {
      throw Error('알 수 없는 액션 타입: ' + action.type);
    }
  }
}
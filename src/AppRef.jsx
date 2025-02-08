import { useEffect, useRef, useState } from "react";

function ButtonCounter() {
  const countRef = useRef(0); // 초기값 0, useRef로 선언한 값은 리렌더링이 발생해도 컴포넌트 별로 저장공간에 있는 값을 그대로 유지한다. 

  const handleClick = () => {
    countRef.current++;
    console.log(countRef.current);
  }
  return <button onClick={handleClick}>Count</button>
}

function Form() {
  const [form, setForm] = useState({
    title: '제목',
    author: '',
    content: ''
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const contentTextareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titleInputRef.current);
    if (!form.title) {
      titleInputRef.current.focus();
    }

    if (!form.author) {
      authorInputRef.current.focus();
    }

    if (!form.content) {
      contentTextareaRef.current.focus();
    }
    console.log('✅ 저장 성공~!');
  }

  useEffect(() => {
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }

    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }

    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
  }, []); // 마운트 된 후, 딱 한 번만 콜백함수 호출하려면 두 번째 인자로 빈 배열 주기.

  const [isChanged, setIsChanged] = useState(false);
  const prevForm = useRef(null);
  
  useEffect(() => {
    // server로부터 데이터 fetch 했다고 가정. 외부 API를 fetch할 때 useEffect 사용!
    prevForm.current = { ...form};
  }, []);

  useEffect(() => {
    
    const hasChanged = (
      prevForm.current.title !== form.title ||
      prevForm.current.content !== form.content ||
      prevForm.current.author !== form.author 
    );

    setIsChanged(hasChanged);
  }, [form]);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>글쓰기</legend>
        <input ref={titleInputRef} name="title" placeholder="제목" value={form.title} onChange={handleForm}/>
        <hr />
        <input ref={authorInputRef} name="author" placeholder="작성자" value={form.author} onChange={handleForm}/>
        <hr />
        <textarea ref={contentTextareaRef} name="content" placeholder="내용" value={form.content} onChange={handleForm}/>
        <hr />
        <button disabled={!isChanged}>전송</button> 
      </fieldset>
    </form>
  )
}

export default function AppRef() {

  return (
    <>
      <h2>Count</h2>
      <ButtonCounter />
      <ButtonCounter />
      <h2>Form</h2>
      <Form />
    </>
  );
}
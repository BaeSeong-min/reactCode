import { useEffect, useState } from "react"

function Courses() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('all');

  // 2] useEffect Hook의 쓰임: 외부 API와 통신할 때 사용.
  useEffect(() => {
    fetch(`data/courses_${filter}.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log('✅ 데이터 조회 성공')
      setList(data);
    });

    return () => {
      console.log('✅ 연결해제~!');
    }
  }, [filter]);

  return (
    <>
      <label htmlFor="all">전체</label>
      <input
        id="all"
        type="radio"
        value="all"
        checked={filter === 'all'}
        onChange={(e) => setFilter(e.target.value)}
      />
      <label htmlFor="favorite">좋아요</label>
      <input
        id="favorite"
        type="radio"
        value="favorite"
        checked={filter === 'favorite'}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default function AppEffect() {

  // 1] useEffect Hook의 쓰임: DOM 조작하기, 컴포넌트에서 return 하는 요소들이 DOM에 삽입된 후에 콜백함수를 한 번만 호춣한다. 
  // useEffect(() => {
  //   const $h2 = document.querySelector('#title');
  //   console.log($h2);
  // }, []);

  const [show, setShow] = useState(true);

  return (
    <>
      <h2 id="title">데이터 가져오기</h2>
      <button onClick={() => setShow(!show)}>toggle</button>
      <hr />
      {show && <Courses />}
    </>
  )
}
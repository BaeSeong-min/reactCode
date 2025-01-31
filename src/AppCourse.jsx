import './AppCourse.css';
import CourseForm from './components/CourseForm.jsx';
import Card from './components/Card.jsx';
import { useState } from 'react';

function App() {
  // state 적용 및 좋아요 클릭 시 해당 상태 변경. 잘 작동하면 useState를  useImmer로 변경하기.
  const [items, setCourseItems] = useState([
    {
      id: 0,
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: '/img/htmlcss.png',
      isFavorite: true,
      link: 'https://inf.run/JxyyT',
    },
    {
      id: 1,
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/img/js.png',
      isFavorite: false,
      link: 'https://inf.run/Kpnd',
    },
    {
      id: 2,
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      thumbnail: '/img/portfolio.png',
      isFavorite: true,
      link: 'https://inf.run/YkAN',
    }
  ]);
  const handleFavoriteChange = (id, isFavorite) => {
    const newItems = items.map((item => {
      if (item.id === id) {
        return {
          ...item,
          isFavorite
        }
      }
      return item;
    }))

    setCourseItems(newItems);
  }

  const favoriteList = items.filter(item => item.isFavorite); // 콜백 함수에서 true인 해당 요소를 배열에 넣음.

  return (
    <>
      <main style={{flexDirection: "column", gap:"1rem"}}>
        <CourseForm />
        <Card title = "강의 목록" items={items} onFavorite={handleFavoriteChange}/>
        {/* <Card title = "찜한 목록" items={favoriteList}/> */}
      </main>
    </>
  )
}

export default App;
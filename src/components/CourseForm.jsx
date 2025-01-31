import { useImmer } from 'use-immer'; // state 업데이트 할 때, 중첩된 객체인 경우 사용용
import Card2 from './Card2.jsx'

export default function CourseForm() {
  const [form, updateForm] = useImmer({
    title: '리액트 강의',
    description: '리액트 기초부터 실전까지!',
    info: {
      level: 1,
      skill: 'React'
    }
  });

  function handleCourseForm(e) {
    e.preventDefault(); // submit 기본 동작을 막는다. 즉, 새로고침이 안된다.
  }

  const handleChange = (e) => { // computed property를 사용해서 하나의 핸들러 함수만 사용 가능.
    updateForm((draft) => { // draft는 state 자체를 가져온 것. immer 라이브러리를 사용하면 state의 값인 객체를 직접 수정 가능하다. 내부적으로 알아서 새로운 객체를 만들어줌.
      draft[e.target.name] = e.target.value
    })
  }

  const handleSkillChange = (e) => {
    updateForm((draft) => {
      draft.info.skill = e.target.value
    })
  }

  const handleLevelChange = (e) => {
    updateForm((draft) => {
      draft.info.level = e.target.value
    })
  }

  return (
    <Card2 title="강의 등록">
      <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}} onSubmit={handleCourseForm}>
        <input name='title' type='text' placeholder='강의 제목' value={form.title} onChange={handleChange}/>
        <input name='description' type='text' placeholder='강의 한줄 설명' value={form.description} onChange={handleChange}/>
        <div style={{display: 'flex', alignItems: 'center'}}> 
          <label htmlFor='skill' style={{ width: '100px' }}>스킬</label>
          <input name='skill' id="skill" type='text' value={form.info.skill} onChange={handleSkillChange}></input>
        </div>
        
        <div style={{display: 'flex', alignItems: 'center'}}> 
          <label htmlFor='skill' style={{ width: '100px' }}>난이도</label>
          <select name='level' id='level' value={form.info.level} onChange={handleLevelChange}>
            <option value="0">입문</option>
            <option value="1">중급</option>
            <option value="2">고급</option>
          </select>
        </div>

        <input type='submit' placeholder='등록' />
        {(form.title || form.description) && (
          <div style={{marginTop: '16px', padding: '16px', backgroundColor: '#eee', borderRadius: '6px' }}>
          {form.title && (<p>제목 - {form.title}</p>)}
          {form.description && (<p>설명 - {form.description}</p>)}
          {form.info.skill && (<p>스킬 - {form.info.skill}</p>)}
          {form.info.level && (<p>난이도 - {form.info.level}</p>)}
        </div>
        )}
      </form>
    </Card2>
  )
}
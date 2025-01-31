import { Fragment } from "react";
import Article from "./Article.jsx";
import Card2 from "./Card2.jsx";

export default function Card({ onFavorite, title, items }) {

  const lastIndex = items.length - 1;
  // map을 통해 리스트를 렌더링할 때는 항상 키가 있어야 한다. 
  // 리스트 안에서 자식 컴퍼넌트를 렌더링하기 위해선 각각 key가 있어야한다. 
  return (
    <Card2 title={title}>
      <div className="courses">
        {items.map((item, index) => 
          <Fragment key={item.id}>
            <Article {...item} onFavorite={onFavorite} />
            {index != lastIndex && <hr className="divider" />}
          </Fragment>
          )} 
      </div>
    </Card2>
  );
}

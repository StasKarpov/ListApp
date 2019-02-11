import React from 'react';
import '../styles/SortPanel.css';


const SortPanel = ({sort_by_name,sort_by_views,toogle_order,sort,sort_direction}) => (
  <div className="sort-panel">
    Сортировать по:
    <button onClick={sort === 'BY_NAME'?toogle_order:sort_by_name}
            >Имени</button>
    <button onClick={sort === 'BY_PAGE_VIEWS'?toogle_order:sort_by_views}
            >Количевству просмотров</button>
  </div>
)

export default SortPanel

import React from 'react';


const SortPanel = ({sort_by_name,sort_by_views,set_asc_order,set_desc_order,sort,sort_direction}) => (
  <div style={{color:'white'}}>
    Сортировать по:
    <button onClick={sort_by_name}
            disabled={sort === 'BY_NAME' ? true:false}
            >Имени</button>
    <button onClick={sort_by_views}
            disabled={sort === 'BY_PAGE_VIEWS' ? true:false}
            >Количевству просмотров</button>
    <br/>
    Порядок сортировки:
    <button onClick={set_asc_order}
            disabled={sort_direction === 'ASCENDING' ? true:false}
            >Возрастающий</button>
    <button onClick={set_desc_order}
            disabled={sort_direction === 'DESCENDING' ? true:false}
            >Спадающий</button>
  </div>
)

export default SortPanel

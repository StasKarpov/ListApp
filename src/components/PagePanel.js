import React from 'react';
import '../styles/PagePanel.css';

const  PagePanel = ({inc_page,dec_page,max_page,page}) => (
  <div className='page-panel'>
    {page > 1 ?
    <button onClick={dec_page}
            >{'<'}</button> : null}
    <span>{page} из {max_page}</span>
    {page<max_page ?
    <button onClick={inc_page}
            >{'>'}</button>:null}
  </div>
)

export default PagePanel

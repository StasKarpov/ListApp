import React from 'react';
import '../styles/TableRecord.css';


const colors = ['#67c9de','#ba6fcb','#e39473','#5aa9e6','#ac5061','#9ec07f','#b4507b',
          '#345feb','#6bd3dd','#c1da90']


const TableRecord = ({id,name,count_pub,pageviews}) => (
  <th className="table-record">
    <div className='left-part'>
      <span className="user-number" >{id}</span>
      <span className='name-circle'
            style={{'backgroundColor':colors[id%10]}}>{name[0]}</span>
      <span >{name}<br/>
      <span className="grey-text small-text">{count_pub} публ.</span>
      </span>
    </div>
    <span style={{'float':'right'}}>
      {pageviews}
    </span>
  </th>
)

export default TableRecord

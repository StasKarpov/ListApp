import React from 'react';
import '../styles/TableRecord.css';
import gold_medal from '../resources/medals/1st.svg'
import silver_medal from '../resources/medals/2nd.svg'
import bronze_medal from '../resources/medals/3rd.svg'

const colors = ['#67c9de','#ba6fcb','#e39473','#5aa9e6','#ac5061','#9ec07f','#b4507b',
          '#345feb','#6bd3dd','#c1da90']



const TableRecord = ({id,name,count_pub,pageviews,medal}) => (
  <th className="table-record">
  {medal? medal==='gold'?
  <img alt="gold" src={gold_medal} />:medal==='silver'?
  <img alt="silver" src={silver_medal} />:medal==='bronze'?
  <img alt="bronze" src={bronze_medal} />:null:null}
      <span className="user-number" >{id<10?` `+id:id}</span>
      <div className='name-circle'
            style={{'backgroundColor':colors[id%10]}}>{name[0]}</div>
      <span style={{'float':'left'}}>{name}<br/>
        <span style={{'float':'left'}} className="grey-text small-text">
        {count_pub} публ.
        </span>
      </span>
    <span style={{'float':'right'}}>
      {pageviews>1000?"" + Math.floor(pageviews/1000) + " " + pageviews.toString().slice(-3):pageviews }
    </span>
  </th>
)

export default TableRecord

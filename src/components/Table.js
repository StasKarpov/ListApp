import React, { Component } from 'react';
import TableRecord from './TableRecord'
import PagePanel from './PagePanel'
import SortPanel from './SortPanel'
import '../styles/Table.css';
import search_device from '../resources/images/search.png'
class Table extends Component {

  render(){
    return(
      <div className="table">
        <table>
          <tbody>
            <tr className='search-input'>
              <th>
                <div>
                  <input
                  style={{'backgroundImage':'url('+search_device+')'}}
                  value={this.props.filterValue}
                  onChange={(v)=>this.props.setFilter(v.target.value)}
                  placeholder='Поиск авторов по имени'/>
                  <SortPanel {...this.props}/>
                </div>
              </th>
            </tr>
              {this.props.records.map((record,index) => (
                  <tr key={index}>
                    <TableRecord {...record}/>
                  </tr>
                )
              )}
          </tbody>
        </table>
        <PagePanel {...this.props}/>
      </div>
    )
  }
}

export default Table

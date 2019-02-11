import React, { Component } from 'react';
import TableRecord from './TableRecord'
import PagePanel from './PagePanel'
import SortPanel from './SortPanel'
import '../styles/Table.css';

class Table extends Component {

  render(){
    return(
      <div className="table">
        <SortPanel {...this.props}/>
        <table>
          <tbody>
            <tr>
              <th>
                <input
                value={this.props.filterValue}
                onChange={(v)=>this.props.setFilter(v.target.value)}
                placeholder='Поиск авторов по имени'/>
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

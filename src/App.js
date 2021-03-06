import React, { Component } from 'react';
import Table from './components/Table'
import test_data from './resources/data'

//sort descriptions
const BY_NAME = 'BY_NAME'
const BY_PAGE_VIEWS = 'BY_PAGE_VIEWS'
const DESC = 'DESCENDING'
const ASC = 'ASCENDING'


class App extends Component {
  constructor(props){
    super(props)

    //swap name with familyname
    let changed_data = test_data.map(e=>{
        e.name = e.name.split(' ').reverse().join(' ')
        return e
    })

    //count all data and give a number to every record
    changed_data = changed_data.map((e,i) => Object.assign({},e,{id:i+1}))

    //find top 3
    let top_3 = changed_data.sort((a,b)=>a.pageviews>b.pageviews).slice(0,3)
    Object.assign(top_3[0],{medal:'gold'})
    Object.assign(top_3[1],{medal:'silver'})
    Object.assign(top_3[2],{medal:'bronze'})

    this.state = {
      fetchedData:changed_data,//to save original data when filtering
      data:changed_data,//all data with numbers
      page:1,
      sort_direction:DESC,
      sort:BY_PAGE_VIEWS,
      filterValue:''
    }
  }

  //set next page
  inc_page(){
    if(Math.ceil(this.state.data.length/10)>this.state.page){
      this.setState({page:this.state.page+1})
    }
  }

  dec_page(){
    if(this.state.page>1){
      this.setState({page:this.state.page-1})
    }
  }

  set_order_by_name(){
    let new_data = this.state.data.sort((first,second)=>{
        if(first.name>second.name)
          return 1
        else if(first.name<second.name)
          return -1
        else
          return 0
      })
    this.setState({
      sort:BY_NAME,
      data:new_data.map((e,i) => Object.assign({},e,{id:i+1}))
    })
  }

  set_order_by_views(){
    let new_data = this.state.data.sort((first,second)=>{
      if(first.pageviews<second.pageviews)
        return 1
      else if(first.pageviews>=second.pageviews)
        return -1
      else
        return 0
    })
    this.setState({
      sort:BY_PAGE_VIEWS,
      data:new_data.map((e,i) => Object.assign({},e,{id:i+1}))
    })
  }

  //set ascending order of displayed items if descending order was and vice versa
  toogle_order(){
    let new_data = this.state.data
    new_data.reverse()
    this.setState({
      sort_direction:this.state.sort_direction===ASC?DESC:ASC,
      data:new_data
    })
  }

  //for searching by name
  setFilter(v){
    if(v){
      let new_data = this.state.fetchedData.filter((record)=>{
        let part1 = record.name.toLowerCase().substr(0,v.length)//for familyname
        let part2 = record.name.toLowerCase().split(' ')[1].substr(0,v.length)//for name
        if(part1 === v.toLowerCase() ||
           part2 === v.toLowerCase()){
             return true
           }
        return false
      })
      this.setState({
        filterValue:v,
        data:new_data.map((e,i) => Object.assign({},e,{id:i+1}))
      })
    }else{
      this.setState({
        data:this.state.fetchedData.map((e,i) => Object.assign({},e,{id:i+1}))
      })
    }
  }

  render() {
    let {data, page, sort_direction, sort} = this.state

    return (
     <Table
      records={data.slice((page-1)*10,Math.min(data.length,page*10))}
      sort_by_name={()=>this.set_order_by_name()}
      sort_by_views={()=>this.set_order_by_views()}
      toogle_order={()=>this.toogle_order()}
      inc_page={()=>this.inc_page()}
      dec_page={()=>this.dec_page()}
      sort={sort}
      sort_direction={sort_direction}
      page={page}
      max_page={Math.ceil(data.length/10)}
      setFilter={(v)=>this.setFilter(v)}/>
    )
  }
}

export default App;

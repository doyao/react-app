import React,{Component} from 'react';
import store from '../store';
import ModalList from './Modal'
import TabList from './TabList'
class TodoList extends Component{
  constructor(props) {
    super(props);
    this.state=store.getState();
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handledeletes=this.handledeletes.bind(this);
    this.handleStoreChange=this.handleStoreChange.bind(this);
    store.subscribe(()=>{
      this.setState(store.getState())
    });
    
  }
  
  render() {
  
    return(
      <div className="todoList">
          <ModalList
          handleChange={this.handleChange}
          list={this.state.list}
          />
          <TabList
          handledeletes={this.handledeletes}
          list={this.state.list}
          />
      </div>
    )
  }
  handleStoreChange(){
    this.setState(store.getState());
  }
  handleChange(list) {
    const action={
      type:"ADD_LIST",
      value:list
    }
    store.dispatch(action);
  }
  handleSubmit() {
    return 
  }
  handledeletes(index){
    const action={
      type:'DELETE_LIST',
      index:index
    }
    store.dispatch(action)
  }
}
export default TodoList;
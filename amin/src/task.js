import React, { Component } from 'react';
import './task.css'
import axios from 'axios'

import { connect } from 'react-redux'

class Project extends Component {
    constructor(props)
    {
        super(props)
        this.state={...this.props.project  }
    }
   
    // componentWillMount(){
    //      axios
    //     .get("/project")
    //     .then(res =>this.setState({...this.state,...res.data}))
    //     .catch(err => console.log(err))
        
    // }
    onChangeListValue=(e,listName)=>{
        let newLists=this.state.lists.map(el=>{if(el.name===listName) return {name:el.name,inputValue:e.target.value}; else return el})
        this.setState({lists:newLists})
        this.shouldComponentUpdate=(nextProps,nextState)=>{return false }
    }
    addTask=(listIndex)=>{
        let tab=this.state.tasks
        tab.push({name : this.state.lists[listIndex].inputValue, list:this.state.lists[listIndex].name,members:[]})
        this.setState({tasks:tab})
        this.shouldComponentUpdate=(nextProps,nextState)=>{return true }
        this.props.updateProject()
    }
    addList=()=>{
        let newLists=this.state.lists
        newLists.push({name:this.state.newList,inputValue:""})
        this.setState({lists:newLists})
        this.shouldComponentUpdate=(nextProps,nextState)=>{return true } 
        this.props.updateProject()
    }
    onDragStart=(ev,index,oldTask)=>{
        if(ev.target.className==="taskName")
        {
            ev.dataTransfer.setData("taskIndex",index);
        }
        else if (ev.target.className==="memberPicture")
        {
            ev.dataTransfer.setData("pictureIndex",index);
            ev.dataTransfer.setData("oldTask",oldTask);
        }
        else if(ev.target.className==="memberPicture drag")
        {
            ev.dataTransfer.setData("pictureIndex",index);
            ev.dataTransfer.setData("code",2);
        }
    }
    onDragOver = (ev) => {
        ev.preventDefault();
    }
    onDrop=(e,index,number)=>{
        let taskIndex=e.dataTransfer.getData("taskIndex")
        let pictureIndex=e.dataTransfer.getData("pictureIndex")
        let oldTask=e.dataTransfer.getData("oldTask")
        let code=e.dataTransfer.getData("code")
        if(taskIndex!=="")
        {
            let tab =this.state.tasks
            tab[taskIndex].list=this.state.lists[index].name
            this.setState({tasks:tab})
        }
        else if(e.target.className==="taskMembers" && code==="2" && number===10 )
        {
            let tab =this.state
            console.log("ff",index);
            
            tab.tasks[index].members.push(tab.team[pictureIndex])
            this.setState({tab})
        }
        else if (e.target.className==="taskMembers" && number===10)
        {
            let tab =this.state.tasks
            tab[index].members.push(tab[oldTask].members[pictureIndex])
            // tab[oldTask].members=tab[oldTask].members.filter((el,i)=>i!=pictureIndex)
            this.setState({tasks:tab})
        }
        
        this.props.updateProject()
    }
    render(){
        
        const Task=(props)=>{
            return(
                <div className="task" key={props.indexKey}>
                    <div className="taskName" draggable onDragStart={(e)=>this.onDragStart(e,props.indexKey)} >
                        <h3>{props.name}</h3>
                    </div>
                    <div className="taskMembers" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, props.indexKey,10)}}>
                        {props.members.map((el,i)=><img draggable onDragStart={(e)=>this.onDragStart(e,i,props.indexKey)} className="memberPicture" src={el.src} alt={el.name}/>)}
                    </div>
                </div>
            )
        }
        const List=(props)=>{
            return(
                <div className="List" key={props.indexKey} onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, props.indexKey,9)}}>
                    <div className="listHead">
                        <h2>{props.name}</h2>
                    </div>
                    <div className="listBody">
                        {this.state.tasks.map((el,i)=>{if(el.list===props.name) {return <Task name={el.name} members={el.members} indexKey={i}/>}})}
                    </div>
                    <div>
                        <input type="text" onChange={(e)=>{this.onChangeListValue(e,props.name)}}/>
                        <input type="button" value="add task" onClick={()=>{this.addTask(props.indexKey)}}/>
                    </div>
                </div>
            )
        }
        
        return(
            <div className="project">
                <div className="addNewList">
                    <input type="text" onChange={(e)=>{this.setState({newList:e.target.value})}}/>
                    <input type="button" value="add new list" onClick={()=>{this.addList()}}/>
                </div>
                <div className="teamMembers">
                    <h2>this are the team members</h2>
                    {this.state.team.map((el,i)=> <img draggable onDragStart={(e)=>this.onDragStart(e,i)} src={el.src} alt={el.name} key={i} className="memberPicture drag"/>)}
                </div>
                <div className="Lists">
                    {this.state.lists.map((el,i)=> {return <List indexKey={i} name={el.name}/>})}
                </div>
            </div>
        )}
    
}


  const mapDispatchToProps = (dispatch) => {
    
    return {
        updateProject :()=>dispatch({type:'UPDATE_PROJECT',project:Project.state})
    }
  
  }
  
const mapStateToProps = (state) => {
    console.log(state)
    return {
  
      project : state
  
    }
  
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Project);
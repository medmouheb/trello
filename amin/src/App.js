import React, { Component } from 'react';
import './App.css'
import Project from './task.js'
class App extends Component {
  /*state={
    addValue:"",
    list:[{name:}],
    tasks:[],
    team:[]
  }*/
  /*state={
    lists:[
      {name:"todo",inputValue:""},
      {name:"doing",inputValue:""},
      {name:"done",inputValue:""}
    ],
    tasks:[
      {name:"authentification" , list:"todo",img:["https://tbsila.cdn.turner.com/toonla/images/cnemea/show/picker/item/apple-%26-onion/uk/cn_en_appleandonion_showpage_desktop_banner_showpicker_96x100.png","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg/239px-Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg","https://tbsila.cdn.turner.com/toonla/images/cnemea/show/picker/item/%D9%81%D8%AA%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D9%88%D8%A9/ab/ppg-show-picker-ppg.png"]},
      {name:"ice ice baby" , list:"done",img:[]},
      {name:"hello " , list:"doing",img:[]},
      {name:"its me " , list:"doing",img:[]},
      {name:"first time no worm up" , list:"doing",img:[]},
      {name:"thing" , list:"todo",img:[]},
      {name:"ading" , list:"done",img:[]}
    ],
    team:[
      {name:"hama",src:"https://tbsila.cdn.turner.com/toonla/images/cnemea/show/picker/item/apple-%26-onion/uk/cn_en_appleandonion_showpage_desktop_banner_showpicker_96x100.png"},
      {name:"salah",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg/239px-Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg"},
      {name:"slim",src:"https://tbsila.cdn.turner.com/toonla/images/cnemea/show/picker/item/%D9%81%D8%AA%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D9%88%D8%A9/ab/ppg-show-picker-ppg.png"}
    ]
  }
  onDragStart = (ev, el) => {
    if(ev.target.className==="teamPicture")
    {console.log('dragstart pic : ',el);
    ev.dataTransfer.setData("picture", el);
  }
    else if(ev.target.className==="task")
    {console.log('dragstart : ',el);
    ev.dataTransfer.setData("name", el);}
    
  }
  onDragOver = (ev) => {
    ev.preventDefault();
}
  onDrop=(ev,List)=>{
    
    let name=ev.dataTransfer.getData("name")
    let pic=ev.dataTransfer.getData("picture")
    if(name!=="")
    {
      let tasks=this.state.tasks.filter((element)=>{
      if(element.name==name){
        element.list=List
      }
      return element
    })
    this.setState({
      ...this.state,
      tasks
    })}
    if(pic!=="" && List!=="todo" && List!=="doing" && List!=="done")
    {
      console.log(pic);
      
      let tasks=this.state.tasks
      console.log(List)
      let inde=0;
      tasks.forEach((el,i)=>{if(el.name===List) {inde=i}})
      console.log(inde)
      
      
      tasks=tasks.map(el=> { el.img=el.img.filter(p=>p!==pic);return el})
      tasks[inde].img=tasks[inde].img.concat(pic)
      //tasks=tasks.map(el=>{el.img=el.name===List?tab.img:el.img;return el})
      
      this.setState({
        ...this.state,
        tasks
      })
    }
  }*/
  render() {
    return(<Project/>)
   /* const task=(props)=>{

    }
    var lists={
      todo:[],
      doing:[],
      done:[]
    }
    this.state.tasks.forEach((element,index) => {
      lists[element.list].push(
        <div>
        <div className="task" draggable onDragStart = {(e) => this.onDragStart(e, element.name)} key={index}>
          {element.name}
        </div>
        <div className="teamPictures" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, element.name)}} >
            {element.img.map((el)=><img className="teamPicture" draggable onDragStart = {(e) => this.onDragStart(e, el)}  src={el}/>)}
          </div>
        </div>
      
      )
    });
    return (

      <div className="App">
      <div className="addList">
        <input type="text" onChange={(e)=>{this.setState({addValue:e.target.value})}}/>
        <input type="button" value="add list" />
      </div>
        <div className="list todo" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, "todo")}}>
          <h2>list todo</h2>
          {lists.todo}
          <div>
            <input type="text" onChange={(e)=>{this.setState({valueTodo:e.target.value})}}/>
            <input type="button"  value="add task" onClick={()=>{let tab=this.state.tasks;tab.push({name:this.state.valueTodo,list:"todo"});this.setState({...this.state,tab})}}/>
          </div>
        </div>
        <div className="list doing" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, "doing")}}>
          <h2>list doing</h2>
          {lists.doing}
          <div>
            <input type="text" onChange={(e)=>{this.setState({valueDoing:e.target.value})}}/>
            <input type="button"  value="add task" onClick={()=>{let tab=this.state.tasks;tab.push({name:this.state.valueDoing,list:"doing"});this.setState({...this.state,tab})}}/>
          </div>
        </div>
        <div className="list done" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, "done")}}>
          <h2>list done</h2>
          {lists.done}
          <div>
            <input type="text" onChange={(e)=>{this.setState({valueDone:e.target.value})}}/>
            <input type="button"  value="add task" onClick={()=>{let tab=this.state.tasks;tab.push({name:this.state.valueDone,list:"done"});this.setState({...this.state,tab})}}/>
          </div>
        </div>

      </div>

    );*/

  }

}



export default App;
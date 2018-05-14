import * as React from 'react';
import './App.css';

interface IState{
  currentTask : string,
  tasks:Array<ITask>,
 
}

interface ITask{
  id:number,
  value:string,
  completed:boolean
}

  

export default class App extends React.Component<{},IState> {
   constructor(props:any){
     super(props);
     
     this.state={
       currentTask:"",
       tasks:[]
     }     
   }

   private handleSubmit=(e:React.FormEvent<HTMLInputElement>)=>{
    e.preventDefault();
    this.setState=({    
     currentTask:"",
      tasks:[
      ...this.state.tasks,
      {
        id:this._TimeinMilliseconds(),
      value :this.state.currentTask,
      completed:false
      }
      ]
    })
   }

   private deleteTask=(id:number):void=>{
     const filteredTasks =this.state.tasks.filter((task:ITask)=>{
        task.id !==id;
     });
     this.setState({ tasks:filteredTasks })
   }

   private renderTasks():JSX.Element[]{
     return this.state.tasks.map((task:ITask,index:number) =>{
       return(
     <div key="task.id">{task.value}<button onClick={this.deleteTask(task.id)}>Delete</button></div>
       );
     });
   }

   private _TimeinMilliseconds():number{
     const date:Date= new Date();
     return date.getTime();
   }

  public render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>ToDO app</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter the task" onChange={(e)=>this.setState({currentTask:e.target.value})}/>
          <button type="submit">Add</button>
        </form>
      
              <div>{this.renderTasks}</div>
        </div>
    );
  }
 

}



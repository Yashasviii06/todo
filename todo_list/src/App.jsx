import { useState } from "react";
import "./App.css"
import TodoList from "./TodoList";

const App = () => {
const [inputList , setInputList]=useState("");
const [objectInArray , setObjectsInArray]=useState([]);
const inputEvent=(event) => {
    setInputList(event.target.value);
    };
const clickedButton =()=>{
  setObjectsInArray((oldItems)=>{
    return[...oldItems,inputList];
  });
  setInputList("");
}
const deleteItem=(id) =>{
     setObjectsInArray((olditems)=>{
      return olditems.filter((arrElem,index)=>{
                  return index!==id;
      })
     })
}
  return(
         <div className="body">
          <div className="block">
            <div className="head"><h1>Todo List</h1></div>
              <div className="userinput">
                <input type="text" 
                       placeholder="Add New Todo"
                       onChange={inputEvent}
                       value={inputList}
                       ></input>
                <button onClick={clickedButton}>+</button>
              </div>
              <div className="line"></div>
              <br />
              <div className="todo">
                <ol>
                    {  objectInArray.map((inputList, index)=>{
                        return <TodoList 
                        key={index}
                        id={index}
                        text={inputList}
                        onSelect={deleteItem}
                      />;
                    })
                    }
               </ol>
       </div>
              
            </div>
            
         </div>
  )
}

export default App;
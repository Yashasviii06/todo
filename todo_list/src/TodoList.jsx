import  "./App.css";

const TodoList= (props)=>{
    return(

        <div className="listTag">
        <button 
        onClick={()=>{
                     props.onSelect(props.id)
                     }} >X</button>
        <li>{props.text}</li>
        </div>
    )
};

export default TodoList;
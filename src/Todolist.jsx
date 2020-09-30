import React from 'react';

const Todolist =(props) =>{
    return (
    <>
       <div className="todo-style">
            <i className="fa fa-times" 
            aria-hidden="true"
            onClick={()=>{
                props.onSelect(props.id);
            }}
            >   
            </i>
            <li className="list-style">{props.text}</li>

       </div>
    </>
    );
}


export default Todolist;
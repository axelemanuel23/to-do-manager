import React from "react";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import "./ToDoList.css";

function ToDoList(){
    const todos = [{
        text: "cortar cebolla",
        completed: false
      },
      {
        text: "cortar pan",
        completed: true
      }];
    return (
        <React.Fragment>
            <section>
                <ul>
                    {todos.map((todo) => (<ToDoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
                </ul>
            </section>
           
        </React.Fragment>
    );
}

export { ToDoList };
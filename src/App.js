import { useState } from "react";
import Todo from "./Todo";

export default function App() {
  const [text, settext] = useState("");
  const [item, setitem] = useState([]);
  function handleChange(event) {
    let d = event.target.value;
    settext(d);
  }
  function addTodo() {
    setitem((prev) => {
      return [...prev, text];
    });
    // setitem(text);
  }
  function deletes(id) {
    setitem((prev) => {
      return prev.filter((items, index) => {
        return index !== id;
      });
    });
    console.log(id);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>Todo List</h1>
      </div>
      <form>
        <input onChange={handleChange} type="text" value={text} />
      </form>
      <button onClick={addTodo}>Add</button>
      <ul>
        <li>
          {item.map((todoitem, index) => {
            return (
              <Todo
                key={index}
                id={index}
                handledelete={deletes}
                text={todoitem}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
}

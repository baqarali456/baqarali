import { useState } from "react";

function Todo(props) {
  const [click, setclick] = useState(false);
  function handlestyle() {
    setclick((prev) => {
      return !prev;
    });
  }

  return (
    <div onClick={() => props.handledelete(props.id)}>
      <li
        style={{ textDecoration: click ? "line-through" : "none" }}
        onClick={handlestyle}
      >
        {props.text}
      </li>
    </div>
  );
}

export default Todo;

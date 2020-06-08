import React, { useState } from "react";

function ExampleWithManyStates() {
  // 宣告多個 state 變數!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  return (
    <div>
      <p>
        <button onClick={() => setAge(age + 1)}>age++</button>age: {age}
      </p>

      <p>
        <button onClick={() => setFruit(fruit + "a")}>fruit</button>
        {fruit}
      </p>
      <button
        onClick={() => {
          // todos.push({ text: "Learn Hooks" + todos.length });
          let updateTodos = todos.concat([
            { text: "Learn Hooks" + todos.length },
          ]);
          setTodos(updateTodos);
        }}
      >
        todos
      </button>
      {/*<p>{todos} </p>*/}
      {todos.map((todo) => (
        <div>{todo.text}</div>
      ))}
    </div>
  );
}

export default ExampleWithManyStates;

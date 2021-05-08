import React from "react";

function TodoItem({todo, index, onComplete, onRemove}) {

  return (
    <div>
      <div className={todo.isCompleted ? 'line-through' : ''}>{todo.text}</div>
      <button onClick={() => onComplete(index) }>Completed</button>
      <button onClick={() => onRemove(index) }>remove</button>
    </div>
  );
}

function AddTodo({add}) {
  let [value, setValue] = React.useState('');

  const onButtonClick = () => {
    console.error('asndvanmsd');
    add(value);
    setValue('');
  }

  return (
    <div>
      <input type="text"  value={value} onChange={e => setValue(e.target.value)}></input>
      <button onClick={onButtonClick}>Add Todo</button>
    </div>
  );
}

function App() {
  const [list, setList] = React.useState([
    {text: 'wanna learn react', isCompleted: false},
    {text: 'wanna learn next', isCompleted: false},
    {text: 'wanna learn gatsby', isCompleted: false},
    {text: 'wanna learn cook', isCompleted: false}
  ]);

  const addTodo = (item) => {
    const newTodos = [...list, {text: item, isCompleted: false}];
    setList(newTodos);
  }

  const onComplete = (index) => {
    const newTodos = [...list];
    newTodos[index].isCompleted = true;
    setList(newTodos);
  }

  const remove = (index) => {
    const newTodos = [...list];
    newTodos.splice(index, 1);
    setList(newTodos);
  }

  return (
    <div>
      {list.map((item, index) => {
        return (
          <TodoItem index={index} todo={item} onComplete={onComplete} onRemove={remove}></TodoItem>
        );
      })}

      <AddTodo add={addTodo}></AddTodo>
    </div>
  );
}

export default App
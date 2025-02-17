import { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTasks((prevTasks) => [...prevTasks, newTodo]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    const newTask = tasks.filter((task, i) => i !== index);
    setTasks(newTask)
  };

  return (
    <div>
      <h1>index de Tarefas</h1>
      {/* form  const neTask pra adicionar as tarefas */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      {/* lista de tarefas */}
      {tasks.length === 0 && <p className="empyt">Não a tarefas</p>}

      <ul>
        {tasks.map((task, index) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(index)}>Apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

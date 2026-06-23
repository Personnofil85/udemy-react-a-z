import { useState } from "react";
import { nanoid } from "nanoid";
import ListItem from "./components/ListItem.jsx";

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: nanoid(7),
      content: "item 1",
    },
    {
      id: nanoid(7),
      content: "item 2",
    },
    {
      id: nanoid(7),
      content: "item 3",
    },
  ]);
  const [task, setTask] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  console.log("taskList ", taskList);

  const handleInput = (e) => {
    setTask(e.target.value);
    setShowValidation(false);
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task === "") {
      setShowValidation(true);
      return;
    }

    setTaskList([...taskList, { id: nanoid(7), content: task }]);
    /* taskList.push({
      id: nanoid(7),
      content: task,
    }); */
    setTask("");
    setShowValidation(false);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">Ma To-do liste</h1>
        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todolist" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded"
            value={task}
            onChange={handleInput}
          />
          {showValidation && (
            <p className="text-red-400">Ajoutez du texte à votre tâche</p>
          )}
          <button
            className="mt-4 py-2 bg-slate-50 rounded min-w-[115px]"
            onClick={handleSubmit}
          >
            Ajouter
          </button>
        </form>
        <ul>
          {taskList.length > 0 ? (
            taskList.map((item) => (
              <ListItem key={item.id} item={item} deleteItem={deleteTask} />
            ))
          ) : (
            <li className="text-slate-100">Désolé, pas de tâche en cours...</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

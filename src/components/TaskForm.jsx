import { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";

function TaskForm() {
  const [laTarea, setLaTarea] = useState("");
  const [descritption, setDescritption] = useState("");

  const { insertaTarea } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    insertaTarea({ laTarea, descritption });
    setLaTarea("");
    setDescritption("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea Tu Tarea</h1>
        <input
          placeholder="Escribe una Tarea"
          onChange={(e) => setLaTarea(e.target.value)}
          value={laTarea}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Descripcion de la Tarea"
          onChange={(e) => setDescritption(e.target.value)}
          value={descritption}
          className="bg-slate-300 p-3 w-full mb-2"
        >
          {" "}
        </textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Enviar</button>
      </form>
    </div>
  );
}

export default TaskForm;

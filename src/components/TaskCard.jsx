import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

function TaskCard({ activity }) {
  const { eliminarTarea } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{activity.title}</h1>
      <p className="text-gray-500 text-sm">{activity.descripcion}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => {
          eliminarTarea(activity.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;

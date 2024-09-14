import {useContext} from 'react'
import TaskCard from "../components/TaskCard";
import {TaskContext} from '../context/taskContext'

function Task() {

  const {activitys} = useContext(TaskContext)

  if (activitys.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>No hay Tareas por hacer</h1>;
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {activitys.map((activity) => (
        <TaskCard activity={activity} key={activity.id} />
      ))}
    </div>
  );
}
export default Task;

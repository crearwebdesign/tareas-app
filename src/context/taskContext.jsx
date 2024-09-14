import {useState, useEffect , createContext} from 'react'
import { actividades} from "../data/tareas";

export const TaskContext = createContext()


export function TaskContextProvider(props) {

    const [activitys, setActivitys] = useState([]);

    useEffect(() => {
        setActivitys(actividades);
      }, []);
    

    function insertaTarea(newTarea) {

        const nuevaTarea = {
          id : activitys.length,
          title : newTarea.laTarea,
          descripcion : newTarea.descritption
        }
        setActivitys([...activitys,nuevaTarea])
        
      }
    
      function eliminarTarea( elId) {
        setActivitys(activitys.filter( t => t.id !== elId))
      }
        

  return (
    <>
       <TaskContext.Provider value={{
        activitys,
        eliminarTarea,
        insertaTarea
       }}>
        {props.children}
       </TaskContext.Provider>
    </>
  )}


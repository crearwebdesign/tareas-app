import Task from "./components/Tasklist";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-white h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <Task />
      </div>
    </main>
  );
}

export default App;

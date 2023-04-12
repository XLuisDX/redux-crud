import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handelDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-4xl text-indigo-700">LD |Redux CRUD</h1>
      </div>
      <header className="flex justify-between items-center py-4">
        <h1 className="font-bold text-4xl">Tasks: {tasks.length}</h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Create task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <button
                  onClick={() => handelDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                >
                  Delete
                </button>
                <Link
                  to={`edit-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                >
                  Edit
                </Link>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;

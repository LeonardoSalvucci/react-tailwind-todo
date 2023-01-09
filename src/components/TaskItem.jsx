import TaskButton from "./TaskButton";
export default function ({ task, done, onComplete, onRemove }) {
  const defaultClasses =
    "bg-sky-100 rounded flex justify-between items-center gap-2 p-3 group hover:cursor-pointer hover:bg-slate-100 transition text-blue-500";
  const doneClasses =
    "flex justify-between items-center p-3 gap-2 rounded bg-blue-500 text-white";

  const completeTask = () => {
    onComplete(task.id);
  };

  const removeTask = () => {
    onRemove(task.id);
  };

  return (
    <div className={!done ? defaultClasses : doneClasses}>
      <span className="flex-1">{task.task}</span>
      {!done && (
        <div className="opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity">
          <TaskButton type="done" onClick={completeTask} />
          <TaskButton onClick={removeTask} />
        </div>
      )}
      {done && (
        <div className="bg-sky-100 text-center rounded-full text-blue-500 flex justify-center items-center p-1">
          <span className="text-blue-500 font-bold material-symbols-outlined">
            done
          </span>
        </div>
      )}
    </div>
  );
}

import TaskButton from "./TaskButton";
export default function ({ task, done }) {
  const defaultClasses =
    "bg-sky-100 rounded flex justify-between items-center gap-2 p-3 group hover:cursor-pointer hover:bg-slate-100 transition text-blue-500";
  const doneClasses =
    "flex justify-between items-center p-3 gap-2 rounded bg-blue-500 text-white";

  return (
    <div className={!done ? defaultClasses : doneClasses}>
      <span className="flex-1">{task}</span>
      {!done && (
        <div className="opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity">
          <TaskButton text="+" />
          <TaskButton text="x" />
        </div>
      )}
      {done && (
        <div className="bg-sky-100 text-center rounded-full h-7 w-7 text-blue-500">
          O
        </div>
      )}
    </div>
  );
}

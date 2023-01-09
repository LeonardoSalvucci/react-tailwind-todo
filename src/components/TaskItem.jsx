import TaskButton from "./TaskButton";
export default function ({ task }) {
  return (
    <div className="bg-sky-100 rounded flex justify-between items-center gap-2 p-3 group hover:cursor-pointer hover:bg-slate-100 transition">
      <span className="flex-1 text-blue-500">{task}</span>
      <div className="opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity">
        <TaskButton text="+" />
        <TaskButton text="x" />
      </div>
    </div>
  );
}

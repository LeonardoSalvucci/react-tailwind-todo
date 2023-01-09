export default function ({ type, onClick }) {
  return (
    <button
      type="button"
      className="p-1 bg-sky-200 rounded-full flex justify-center items-center transition hover:text-white hover:bg-sky-500 hover:scale-125 text-blue-500"
      onClick={onClick}
    >
      {type === "done" ? (
        <span className="material-symbols-outlined font-bold">done</span>
      ) : (
        <span className="material-symbols-outlined font-bold">close</span>
      )}
    </button>
  );
}

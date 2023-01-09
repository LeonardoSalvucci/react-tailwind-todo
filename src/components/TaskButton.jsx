export default function ({ text }) {
  return (
    <button
      type="button"
      className="bg-sky-200 rounded-full w-6 h-6 flex justify-center items-center transition hover:bg-sky-500 hover:scale-125"
    >
      {text}
    </button>
  );
}

export default function ({ children }) {
  return (
    <div className="bg-blue-200 rounded-xl w-1/2 h-1/2 flex justify-center overflow-scroll">
      {children}
    </div>
  );
}

export default function Button({ name, onClick, customStyle }) {
  return (
    <button
      className={`${customStyle} px-5 py-1.5 hover:bg-slate-100 duration-300 rounded-lg font-semibold border-2 text-lg`}
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  );
}

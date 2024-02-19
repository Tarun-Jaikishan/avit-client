"use client";

export default function Card({
  icon,
  name,
  description,
  onClick = () => {},
  customStyle,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${customStyle} p-10 hover:bg-slate-100 duration-300 rounded-xl w-1/2 shadow-lg`}
    >
      <div className="flex justify-center items-center">{icon}</div>
      <h1 className="mt-2 text-2xl font-semibold text-center">
        Watermark {name}
      </h1>
      <p className="mt-5 text-sm text-center">{description}</p>
    </button>
  );
}

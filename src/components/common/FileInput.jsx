import React from "react";

export default function FileInput({
  handleChange,
  accept,
  id,
  iconText,
  customStyle,
}) {
  return (
    <div>
      <input
        type="file"
        onChange={handleChange}
        accept={accept}
        id={id}
        className="hidden"
      />
      <div>
        <label
          htmlFor={id}
          className={`${customStyle} cursor-pointer bg-stone-200 p-10 rounded-xl font-semibold flex flex-col justify-center items-center gap-3 w-fit text-xl`}
        >
          {iconText}
        </label>
      </div>
    </div>
  );
}

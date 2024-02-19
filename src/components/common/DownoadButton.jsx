"use client";

import { IoMdDownload } from "react-icons/io";

export default function DownoadButton({ onClick = () => {}, ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 px-10 py-2 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800 duration-300 text-2xl"
      {...props}
    >
      <IoMdDownload className="text-3xl" />
      Download
    </button>
  );
}

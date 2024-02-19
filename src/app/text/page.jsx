"use client";

import DownoadButton from "@/components/common/DownoadButton";
import { useContext, useState } from "react";
import { FaMarker } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

import FileInput from "@/components/common/FileInput";
import { loadingContext } from "../LoadingProvider";
import TextArea from "@/components/common/TextArea";

export default function page() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const [show, setShow] = useState(false);

  const { setLoading } = useContext(loadingContext);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    // dummy
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(true);
    }, 3000);
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex gap-5 justify-center my-10">
        <div className="flex flex-col items-center justify-center">
          <TextArea
            name={"text"}
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Enter Text"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <FileInput
            handleChange={handleFileChange}
            accept=".jpeg,.jpg,.png"
            id="file_upload"
            iconText={
              <>
                <FaMarker className="text-4xl" /> Upload Watermark
              </>
            }
          />
          {file && (
            <div className="mt-2 flex gap-3 items-center">
              {file.name}
              <button
                type="button"
                onClick={() => setFile2(null)}
                className="text-red-600 hover:text-red-800 duration-300"
              >
                <IoCloseCircle className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center gap-2 px-10 py-2 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800 duration-300 disabled:bg-gray-300"
          disabled={!file || !text}
        >
          Submit
        </button>
      </div>
      {show && (
        <div className="mt-10 flex justify-center items-center">
          <DownoadButton title="Download Image" />
        </div>
      )}
    </div>
  );
}

"use client";

import DownoadButton from "@/components/common/DownoadButton";
import { useContext, useState } from "react";
import { MdAudiotrack } from "react-icons/md";
import { FaMarker } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

import FileInput from "@/components/common/FileInput";
import { loadingContext } from "../LoadingProvider";

export default function page() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const [show, setShow] = useState(false);

  const { setLoading } = useContext(loadingContext);

  const handleFileChange1 = (e) => {
    setFile1(e.target.files[0]);
  };

  const handleFileChange2 = (e) => {
    setFile2(e.target.files[0]);
    console.log(e.target.files[0].name);
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
      <h1 className="text-center text-2xl font-semibold">Audio Watermarking</h1>
      <div className="flex gap-5 justify-center my-10">
        <div className="flex flex-col items-center justify-center">
          <FileInput
            handleChange={handleFileChange1}
            accept=".mp3,.wav"
            id="file_upload1"
            iconText={
              <>
                <MdAudiotrack className="text-4xl" /> Upload Audio
              </>
            }
            customStyle={"!bg-blue-400 text-white"}
          />
          {file1 && (
            <div className="mt-2 flex gap-3 items-center">
              {file1.name}
              <button
                type="button"
                onClick={() => setFile1(null)}
                className="text-red-600 hover:text-red-800 duration-300"
              >
                <IoCloseCircle className="text-xl" />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <FileInput
            handleChange={handleFileChange2}
            accept=".mp3,.wav"
            id="file_upload2"
            iconText={
              <>
                <FaMarker className="text-4xl" /> Upload Watermark
              </>
            }
          />
          {file2 && (
            <div className="mt-2 flex gap-3 items-center">
              {file2.name}
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
          disabled={!file1 || !file2}
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

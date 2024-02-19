"use client";

import DownoadButton from "@/components/common/DownoadButton";
import { useContext, useState } from "react";

import { loadingContext } from "../LoadingProvider";
import TextArea from "@/components/common/TextArea";

export default function page() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

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
      <h1 className="text-center text-2xl font-semibold">Text Watermarking</h1>
      <div className="flex gap-5 justify-center my-10">
        <div className="flex flex-col items-center justify-center">
          <TextArea
            name={"text"}
            onChange={(e) => setText1(e.target.value)}
            value={text1}
            placeholder="Enter Text"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <TextArea
            name={"text"}
            onChange={(e) => setText2(e.target.value)}
            value={text2}
            placeholder="Enter Keywords For Watermark"
            customStyle={"!w-[17rem]"}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center gap-2 px-10 py-2 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800 duration-300 disabled:bg-gray-300"
          disabled={!text1 || !text2}
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

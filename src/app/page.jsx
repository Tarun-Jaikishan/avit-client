"use client";

import Card from "@/components/common/Card";

// Icons
import { FaRegImage } from "react-icons/fa6";
import { MdAudiotrack } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { IoText } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-around gap-5">
        <Card
          name={"IMAGE"}
          icon={<FaRegImage className="text-8xl" />}
          description={
            "Watermark JPG, PNG or GIF images. Stamp images or text over your images at once."
          }
          customStyle={"bg-red-400 text-white hover:!bg-red-500"}
          onClick={() => router.push("/image")}
        />
        <Card
          name={"VIDEO"}
          icon={<FaPhotoVideo className="text-8xl" />}
          description={
            "Add watermarks to your videos online. Add logos, text, and more."
          }
          customStyle={"bg-orange-400 text-white hover:!bg-orange-500"}
          onClick={() => router.push("/video")}
        />
        <Card
          name={"AUDIO"}
          icon={<MdAudiotrack className="text-8xl" />}
          description={"Add watermarks to your mp3, wav, etc online."}
          customStyle={"bg-blue-400 text-white hover:!bg-blue-500"}
          onClick={() => router.push("/audio")}
        />
        <Card
          name={"TEXT"}
          icon={<IoText className="text-8xl" />}
          description={"Add watermarks to your text file."}
          customStyle={"bg-purple-400 text-white hover:!bg-purple-500"}
          onClick={() => router.push("/text")}
        />
      </div>
      <div className="mt-10 flex justify-center items-center">
        <p className="w-1/2 text-center">
          The proliferation of multimedia content as digital media assets,
          encompassing audio, text, images, and video, has led to increased
          risks of unauthorized usage and copyright infringement. Online piracy
          serves as a prominent example of such misuse. To address these
          challenges, watermarking techniques have been developed to protect the
          copyright of digital media while maintaining the integrity of the
          underlying content. Key characteristics evaluated in watermarking
          methods include capability, privacy, toughness, and invisibility, with
          robustness playing a crucial role.
        </p>
      </div>
    </>
  );
}

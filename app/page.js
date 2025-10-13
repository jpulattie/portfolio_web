import Image from "next/image";
import Link from "next/link";
import Footer from "./footer"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[80vh] p-8 gap-16">
      <div className="flex flex-col items-center justify-center bg-black p-20 rounded-xl">
        <Image
            className=" flex justify-center flex-1"
            src="/headshot.png"
            alt="Next.js logo"
            width={270}
            height={57}
            priority
          />
          <h1 className="mb-2 tracking-[.11em] font-mono md:text-2xl texl-lg text-center items-center bg-black p-4 rounded-2xl w-full">
            Josh Pulattie
          </h1>


        </div>

    </div>
  );
}

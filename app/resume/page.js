import Image from "next/image";
import Link from "next/link";
import Footer from "../footer"



export default function Resume() {
    return (
        <div className="font-sans   items-center justify-center h-[80vh] ">

            <div className="flex items-center flex-col flex row-start-2 rounded-xl md:items-center ">
                
                <a
                    href="/Josh-Pulattie-Resume-25.pdf"
                    download
                    className=" p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black"

                >
                    Download Resume
                </a>

                <div className="w-fit rounded-2xl p-2 overflow-y-scroll h-full scrollbar">
                    <Image
                        className=" flex w-fit max-w-screen max-h-[70vh] justify-center rounded-xl"
                        src="/Josh-Pulattie-Resume-25.png"
                        alt="Next.js logo"
                        height={4250}
                        width={5500}
                        priority
                    />
                </div>

            </div>

        </div>
    );
}

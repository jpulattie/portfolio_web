import Image from "next/image";
import Link from "next/link";

export default function Footer() {
return (
    <footer className="h-[10vh] row-start-3 flex flex-col gap-6 p-4 flex-row items-center justify-center rounded-2xl md:text-lg text-sm">
        <div className="bg-black rounded-2xl flex flex-row">
        <Link
          className="flex items-center gap-2 bg-black p-4 rounded-2xl hover:underline hover:underline-offset-4"
          href="/experience"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Experience
        </Link>
        <a
          className="flex items-center gap-2 bg-black  p-4 rounded-2xl hover:underline hover:underline-offset-4"
          href="/projects"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Projects
        </a>
        <a
          className="flex items-center gap-2 bg-black  p-4 rounded-2xl hover:underline hover:underline-offset-4"
          href="/resume"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Resume
        </a>
        </div>
      </footer>
);}
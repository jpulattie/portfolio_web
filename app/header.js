import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-full h-[10vh] flex-col items-center">
      <Link href="/">
        <h1 className="text-center items-center text-2xl mb-2 tracking-[.11em] w-full font-mono bg-black rounded-2xl p-4">
          Josh Pulattie
        </h1>
      </Link>
      
    </div>
  );
}
import Image from "next/image";
import './globals.css';

export default function Home() {
  return (

    <div className="h-screen w-full flex 
    items-center justify-center">
      <div className="grid h-full w-full
      grid-cols-4 grid-rows-3 gap-3 p-20
      ">
        <div className="col-span-1 row-span-1 bg-gray-900
        rounded-xl">
          <div className="flex align-middle justify-center">
            hello
          </div>
        </div>
        <div className="col-span-3 row-span-1 bg-gray-900
        rounded-xl"></div>
        <div className="col-span-2 row-span-1 bg-gray-900
        rounded-xl"></div>
      </div>
    </div>

  )
}


import Image from "next/image";
import './globals.css';

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>

      <div className="h-screen w-full flex 
      items-center justify-center bg-slate-600">
        <div className="grid h-full w-full
        grid-cols-4 grid-rows-3 gap-3 p-20
        xl:m-64 lg:m-32 md:m-16">
          <div className="col-span-1 row-span-1 bg-slate-900
          rounded-xl"></div>
          <div className="col-span-2 row-span-1 bg-slate-900
          rounded-xl"></div>
        </div>
      </div>
    </main>
  )
}


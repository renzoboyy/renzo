
import { Inter, Poppins } from "next/font/google";
import './globals.css';
import GithubCalendar from "./components/GithubCalendar";

const interFontBold = Inter({
  subsets: ["latin"],
  weight: "800", 
})

const poppins = Poppins({
  weight: "300"
})

export default function Home() {
  return (
    <main>
      <div className="w-full flex 
      items-center justify-center">
        <div className="grid h-full w-full
        grid-cols-4 grid-rows-3 gap-3 p-20
        ">
          <div className="col-span-1 row-span-1 bg-gray-900
          rounded-xl">
            <div className={`ml-4 mt-2 text-4xl ${interFontBold.className}`}>
              <h1>renzo</h1>
              <div className={`text-base opacity-50 ${poppins.className}`}>
                Information Systems
              </div>
            </div>
          </div>
          <div className="col-span-3 row-span-1 bg-gray-900
          rounded-xl"></div>
          <div className="col-span-2 row-span-1 bg-gray-900
          rounded-xl"></div>
          <div className="col-span-1 row-span-1 bg-gray-900
          rounded-xl">
            <div className={`ml-4 mt-2 text-3xl ${interFontBold.className}`}>
              GitHub
              <div className={`mt-2 mr-4 text-lg ${poppins.className}`}>
                <GithubCalendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


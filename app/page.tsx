import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import { GitHubCalendar } from 'react-github-calendar';
import './globals.css';

type ColorPalette = [string, string, string, string, string];

interface ThemeInput {
  light: ColorPalette;
  dark: ColorPalette;
}

const explicitTheme: ThemeInput = {
  light: ['#999999', '#997A7A', '#995454', '#992A2A', '#FF0000'],
  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
}

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
      <div className="h-screen w-full flex 
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
          <div className="col-span-2 row-span-1 bg-gray-900
          rounded-xl">
          </div>
          <div className="col-span-1 row-span-1 bg-gray-900
          rounded-xl">
            <div className={`ml-4 mt-2 text-3xl ${interFontBold.className}`}>
              GitHub
              <div className={`mt-2 mr-4 text-lg ${poppins.className}`}>
                <GitHubCalendar 
                username="renzoboyy"
                colorScheme="light" 
                theme={explicitTheme}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


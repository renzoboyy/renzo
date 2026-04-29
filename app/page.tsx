import { Suspense } from "react";
import HomeClient from "./HomeClient";
import StravaCard from "./components/StravaActivity";

export default function Home() {
  return (
    <HomeClient
      stravaSlot={
        <Suspense fallback={<p className="text-xs opacity-50">Loading...</p>}>
          <StravaCard />
        </Suspense>
      }
    />
  );
}
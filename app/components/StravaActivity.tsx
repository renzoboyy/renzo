// app/components/StravaActivity.tsx
// NO "use client" at the top!

interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  type: string;
  start_date: string;
  pace?: string;
}


async function getLatestActivity(): Promise<StravaActivity | null> {
  try {
    const authResponse = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      body: JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        refresh_token: process.env.STRAVA_REFRESH_TOKEN,
        grant_type: "refresh_token",
      }),
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    const authData = await authResponse.json();
    console.log("Auth response:", authData); // Check this in your terminal

    if (!authData.access_token) {
      console.error("No access token received:", authData);
      return null;
    }

    const response = await fetch(
      "https://www.strava.com/api/v3/athlete/activities?per_page=1",
      {
        headers: { Authorization: `Bearer ${authData.access_token}` },
        cache: "no-store",
      }
    );

    const data = await response.json();
    console.log("Activities response:", data); // Check this in your terminal

    if (!Array.isArray(data) || data.length === 0) {
      console.error("No activities found:", data);
      return null;
    }

    return data[0];
  } catch (err) {
    console.error("Strava fetch error:", err);
    return null;
  }
}

function calcPace(moving_time: number, distance: number): string {
  if (distance === 0) return "N/A";

  const secondsPerKm = (moving_time / distance) * 1000;
  const minutes = Math.floor(secondsPerKm / 60);
  const seconds = Math.round(secondsPerKm % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")} /km`;
}

export default async function StravaCard() {
  const activity = await getLatestActivity();

  if (!activity) {
    return (
      <div className="flex flex-col justify-center h-full">
        <p className="text-xs opacity-50">Could not load activity.</p>
      </div>
    );
  }

  const km = (activity.distance / 1000).toFixed(2);
  const mins = Math.floor(activity.moving_time / 60);
  const secs = activity.moving_time % 60;
  const runPace = calcPace(activity.moving_time, activity.distance)
  
const typeLabels: Record<string, string> = {
  WeightTraining: "Gym",
};

const activityType = typeLabels[activity.type] ?? activity.type;

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-1 drop-shadow-lg/30">
          Latest Workout
        </p>
        <h3 className="text-xl font-bold leading-tight drop-shadow-lg/30">
          {activityType}
        </h3>
        <p className="text-xs opacity-40 mt-2 drop-shadow-lg/30">
          {new Date(activity.start_date).toLocaleDateString()}
        </p>
        <div className="flex flex-wrap gap-10 mt-4">
          {activityType === "Run" && (
            <>
            <div>
              <p className="text-2xl font-bold drop-shadow-lg/30">{km}</p>
              <p className="text-xs opacity-50 drop-shadow-lg/30">km</p>
            </div>
            <div>
                            <p className="text-2xl font-bold drop-shadow-lg/30">{runPace}</p>
              <p className="text-xs opacity-50 drop-shadow-lg/30">pace</p>
            </div>
            </>
          )}
          <div>
            <p className="text-2xl font-bold drop-shadow-lg/30">
              {mins}:{String(secs).padStart(2, "0")}
            </p>
            <p className="text-xs opacity-50 drop-shadow-lg/30">time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
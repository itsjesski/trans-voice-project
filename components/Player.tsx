"use client";

export default function Player() {
  return (
    <div className="relative flex flex-col items-start w-full mt-10">
      <div className="container min-w-100px w-auto">
        <div className="card flex flex-col items-center bg-gradient-to-tr from-blue-400 to-pink-400 text-xl font-mono p-4 rounded-md text-white">
          <audio id="song" className="block w-full max-w-md mx-auto" controls>
            <source
              src="https://open.spotify.com/track/7DE0I3buHcns00C0YEsYsY?si=5e0442c12f514f04"
              type="audio/mpeg"
            />
          </audio>
          <div className="mt-4">
            <div className="relative flex flex-col rounded-xl self-center">
              <div className="cursor-pointer hover:text-red-400/90 text-white text-xs leading-5 font-medium py-1 px-3 mx-3">
                Report Voice
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

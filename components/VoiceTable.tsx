"use client";

import Link from "next/link";
import Player from "./Player";

export default function VoiceTable() {
  const UserData = [
    {
      id: 1,
      recording: "FILE PATH",
      rating: "Androgynous",
      qualities: "High Resonance (22), High Pitch (3)",
      numRatings: 115,
      notes: "This recording is very high pitched. But I sort of like it.",
    },
    {
      id: 2,
      recording: "FILE PATH",
      rating: "Feminine",
      qualities: "High Resonance (54), Breathy (12)",
      numRatings: 4849,
      notes: "This recording is very breathy. I don't like it.",
    },
    {
      id: 3,
      recording: "FILE PATH",
      rating: "Masculine",
      qualities: "Low Resonance (2), Low Pitch (178)",
      numRatings: 1236,
      notes: "This recording is very low pitched. It sounds masculine.",
    },
  ];

  return (
    <div className="relative flex flex-col w-full self-center mt-5">
      <div className="flex flex-auto mt-3">
        {UserData.map(
          ({ id, recording, notes, rating, qualities, numRatings }) => (
            <div className="relative flex flex-col items-start w-full mt-10">
              <div className="container min-w-100px w-auto">
                <div className="card flex flex-col items-center border text-xl font-mono p-4 rounded-md text-black">
                  <div className="text-2xl font-bold text-white">
                    Recording {id}
                  </div>
                  <div className="text-lg font-bold text-white">
                    <Player></Player>
                  </div>
                  <div className="text-lg font-bold text-white">
                    Notes: {notes}
                  </div>
                  <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-white-700" />
                  </div>
                  <div className="text-lg font-bold text-white">
                    Rating: {rating}
                  </div>
                  <div className="text-lg font-bold text-white">
                    Qualities: {qualities}
                  </div>
                  <div className="text-lg font-bold text-white">
                    Ratings: {numRatings}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

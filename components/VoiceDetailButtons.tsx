"use client";
import Link from "next/link";

export default function VoiceDetailButtons() {
  const voiceQualities = [
    {
      name: "High Resonance",
      value: "HighResonance",
      color: "bg-sky-400/30 hover:bg-sky-400/70 text-white",
    },
    {
      name: "Low Resonance",
      value: "Low Resonance",
      color: "bg-emerald-400/30 hover:bg-emerald-400/70 text-white",
    },
    {
      name: "High Pitch",
      value: "High Pitch",
      color: "bg-sky-400/30 hover:bg-sky-400/70 text-white",
    },
    {
      name: "Low Pitch",
      value: "Low Pitch",
      color: "bg-emerald-400/30 hover:bg-emerald-400/70 text-white",
    },
    {
      name: "Breathy",
      value: "Breathy",
      color: "bg-sky-400/30 hover:bg-sky-400/70 text-white",
    },
    {
      name: "Not Understandable",
      value: "NotUnderstandable",
      color: "bg-emerald-400/30 hover:bg-emerald-400/70 text-white",
    },
    {
      name: "Recording Quality Issues",
      value: "RecordingQuality",
      color: "bg-sky-400/30 hover:bg-sky-400/70 text-white",
    },
  ];

  return (
    <div className="relative flex flex-col w-full self-center mt-5">
      <div className="flex flex-auto mt-3">
        {voiceQualities.map(({ name, value, color }) => (
          <Link
            key={value}
            href="#"
            className={
              color +
              " text-m leading-5 font-medium rounded-full py-1 px-3 flex items-center mx-3"
            }
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

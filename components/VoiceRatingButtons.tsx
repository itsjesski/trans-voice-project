"use client";
import Link from "next/link";

export default function VoiceRatingButtons() {
  const voiceQualities = [
    {
      name: "Feminine",
      value: "Feminine",
      color: "bg-sky-400/30 hover:bg-sky-400/70 text-white",
    },
    {
      name: "Feminine with Masculine Qualities",
      value: "FemmeWithMasc",
      color: "bg-emerald-400/30 hover:bg-emerald-400/70 text-white",
    },
    {
      name: "Androgynous",
      value: "Androgynous",
      color: "bg-sky-400/30 hover:bg-sky-400/70 text-white",
    },
    {
      name: "Masculine with Feminine Qualities",
      value: "MascWithFemme",
      color: "bg-emerald-400/30 hover:bg-emerald-400/70 text-white",
    },
    {
      name: "Masculine",
      value: "Masculine",
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

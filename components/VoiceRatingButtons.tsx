"use client";
import Link from "next/link";

export default function VoiceRatingButtons() {
  const voiceQualities = [
    {
      name: "Feminine",
      value: "Feminine",
      color: "text-sky-600 dark:text-sky-400 bg-sky-400/10 hover:bg-sky-400/20",
    },
    {
      name: "Feminine with Masculine Qualities",
      value: "FemmeWithMasc",
      color:
        "text-emerald-600 dark:text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/20",
    },
    {
      name: "Androgynous",
      value: "Androgynous",
      color: "text-sky-600 dark:text-sky-400 bg-sky-400/10 hover:bg-sky-400/20",
    },
    {
      name: "Masculine with Feminine Qualities",
      value: "MascWithFemme",
      color:
        "text-emerald-600 dark:text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/20",
    },
    {
      name: "Masculine",
      value: "Masculine",
      color: "text-sky-600 dark:text-sky-400 bg-sky-400/10 hover:bg-sky-400/20",
    },
  ];

  return (
    <div className="relative flex flex-col w-4/5 self-center mt-5">
      <div className="flex flex-auto mt-3">
        {voiceQualities.map(({ name, value, color }) => (
          <Link
            key={value}
            href="#"
            className={
              color +
              " text-xs leading-5 font-medium rounded-full py-1 px-3 flex items-center mx-3"
            }
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

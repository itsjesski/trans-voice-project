"use client";

export default function Player() {
  return (
    <div className="relative flex flex-col rounded-xl sh border w-4/5 self-center mt-10">
      <div className="px-10 pt-10 pb-4 flex items-center z-50">
        <div className="flex flex-col">
          <span
            data-song-info="name"
            className="font-sans text-lg font-medium leading-7 text-slate-900 dark:text-white"
          >
            Voice 1231863
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col px-10 pb-6 z-50">
        <input
          type="range"
          id="song-percentage-played"
          className="song-slider mb-3"
          step=".1"
        />
        <div className="flex w-full justify-between">
          <span className="current-time text-xs font-sans tracking-wide font-medium text-sky-500 dark:text-sky-300">
            00:00
          </span>
          <span className="duration-time text-xs font-sans tracking-wide font-medium text-gray-500">
            00:30
          </span>
        </div>
      </div>
      <div className="px-10 rounded-b-xl border-t border-gray-200 flex items-center justify-between z-50 dark:border-gray-900">
        <div className="cursor-pointer prev">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 7C26 5.76393 24.5889 5.05836 23.6 5.8L11.6 14.8C10.8 15.4 10.8 16.6 11.6 17.2L23.6 26.2C24.5889 26.9416 26 26.2361 26 25V7Z"
              fill="#94A3B8"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6 5L6 27"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="cursor-pointer play-pause w-24 h-24 rounded-full shadow-xl flex items-center justify-center paused">
          <svg
            id="play-icon"
            className="ml-[10px]"
            width="31"
            height="37"
            viewBox="0 0 31 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.6901 16.6608L4.00209 0.747111C2.12875 -0.476923 0.599998 0.421814 0.599998 2.75545V33.643C0.599998 35.9728 2.12747 36.8805 4.00209 35.6514L29.6901 19.7402C29.6901 19.7402 30.6043 19.0973 30.6043 18.2012C30.6043 17.3024 29.6901 16.6608 29.6901 16.6608Z"
              className="fill-slate-500 dark:fill-slate-400"
            ></path>
          </svg>

          <svg
            id="pause-icon"
            className="hidden"
            width="24"
            height="36"
            viewBox="0 0 24 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="6"
              height="36"
              rx="3"
              className="fill-slate-500 dark:fill-slate-400"
            ></rect>
            <rect
              x="18"
              width="6"
              height="36"
              rx="3"
              className="fill-slate-500 dark:fill-slate-400"
            ></rect>
          </svg>
        </div>
        <div className="cursor-pointer next">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 7C6 5.76393 7.41115 5.05836 8.4 5.8L20.4 14.8C21.2 15.4 21.2 16.6 20.4 17.2L8.4 26.2C7.41115 26.9416 6 26.2361 6 25V7Z"
              fill="#94A3B8"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linejoin="round"
            ></path>
            <path
              d="M26 5L26 27"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="hidden top-14 w-full absolute ml-auto mr-auto left-0 right-0 text-center max-w-lg h-72 rounded-full bg-highlight blur-2xl dark:block"></div>
    </div>
  );
}

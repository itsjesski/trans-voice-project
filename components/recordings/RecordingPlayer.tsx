import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { useWavesurfer } from "@wavesurfer/react";
import { PauseIcon, PlayIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

export const RecordingPlayer = ({ url }: { url?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [duration, setDuration] = useState(0);

  const { wavesurfer, isPlaying, currentTime, isReady } = useWavesurfer({
    container: containerRef,
    height: 50,
    width: "100%",
    barGap: 2,
    barWidth: 3,
    barRadius: 10,
    waveColor: "#8B5CF6",
    dragToSeek: true,
    url,
  });

  useEffect(() => {
    if (wavesurfer && isReady) {
      setDuration(wavesurfer.getDuration());
    }
  }, [wavesurfer, isReady]);

  return (
    <div className="flex gap-x-5 bg-white/5 rounded-xl px-5 mt-3">
      <div className="flex items-center justify-center">
        <div>
          <div className="">
            <Button color="dark" onClick={() => wavesurfer?.playPause()}>
              {!isPlaying ? (
                <PlayIcon className="w-5 h-5 inline-block ml-2 fill-white" />
              ) : (
                <PauseIcon className="w-5 h-5 inline-block ml-2" />
              )}
            </Button>
          </div>
        </div>
      </div>
      <div ref={containerRef} className={clsx("w-full flex-shrink")} />
      <div className="flex-shrink-0 flex items-center">
        <span className="text-white font-mono">
          {`0:${Math.floor(currentTime).toString().padStart(2, "0")}`} /{" "}
          {`0:${Math.floor(duration).toString().padStart(2, "0")}`}
        </span>
      </div>
    </div>
  );
};

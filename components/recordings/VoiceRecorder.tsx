import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { PauseIcon, PlayIcon } from "@heroicons/react/16/solid";
import { useWavesurfer } from "@wavesurfer/react";
import RecordPlugin from "wavesurfer.js/dist/plugins/record.js";
import { Listbox, ListboxLabel, ListboxOption } from "../ui/listbox";
import clsx from "clsx";

type Props = {
  onRecordingComplete: (blob: Blob) => void;
};

export const VoiceRecorder = ({ onRecordingComplete }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [recordPlugin, setRecordPlugin] = useState<RecordPlugin | null>(null);

  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [recordingBlob, setRecordingBlob] = useState<Blob | null>(null);

  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);

  const [availableAudioDevices, setAvailableAudioDevices] = useState<
    MediaDeviceInfo[]
  >([]);

  useEffect(() => {
    RecordPlugin.getAvailableAudioDevices().then((devices) => {
      setAvailableAudioDevices(devices);
      setSelectedDeviceId(devices[0]?.deviceId);
    });
  }, []);

  useEffect(() => {
    if (recordingBlob) {
      onRecordingComplete(recordingBlob);
    }
  }, [recordingBlob]);

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 100,
    width: "100%",
    barGap: 2,
    barWidth: 3,
    barRadius: 10,
    waveColor: "#8B5CF6",
    dragToSeek: true,
  });

  useEffect(() => {
    if (wavesurfer) {
      if (recordPlugin) {
        recordPlugin.destroy();
      }

      const rPlugin = wavesurfer.registerPlugin(
        RecordPlugin.create({
          renderRecordedAudio: true,
          scrollingWaveform: true,
          scrollingWaveformWindow: 3,
        })
      );
      setRecordPlugin(rPlugin);

      const unsubscribeRecordStart = rPlugin.on("record-start", () => {
        console.log("Recording started");
        setIsRecording(true);
        setRecordingDuration(0);
      });
      const unsubscribeRecordProgress = rPlugin.on(
        "record-progress",
        (seconds) => {
          console.log("Recording progress", seconds);
          setRecordingDuration(Math.floor(seconds / 1000));
        }
      );
      const unsubscribeRecordEnd = rPlugin.on("record-end", (recording) => {
        console.log("Recording ended", recording);
        setIsRecording(false);
        setRecordingBlob(recording);
      });

      const unsubscribeRecordDestroy = rPlugin.on("destroy", () => {
        setRecordingBlob(null);
        setIsRecording(false);
        setRecordingDuration(0);
      });

      wavesurfer.setVolume(0.5);

      return () => {
        unsubscribeRecordStart();
        unsubscribeRecordProgress();
        unsubscribeRecordEnd();
        unsubscribeRecordDestroy();
      };
    }
  }, [wavesurfer]);

  return (
    <div>
      {!isRecording && (
        <div className="grid grid-cols-2 gap-x-5">
          <Button
            onClick={() => {
              recordPlugin?.startRecording({
                deviceId: selectedDeviceId ?? undefined,
              });
            }}
            color="red"
            className="flex-grow"
          >
            {recordingBlob ? "Record again" : "Record"}
          </Button>
          <Listbox
            name="deviceId"
            value={selectedDeviceId}
            onChange={setSelectedDeviceId}
            className="flex-shrink"
          >
            {availableAudioDevices.map((device) => (
              <ListboxOption key={device.deviceId} value={device.deviceId}>
                <ListboxLabel>{device.label}</ListboxLabel>
              </ListboxOption>
            ))}
          </Listbox>
        </div>
      )}
      {isRecording && (
        <Button
          onClick={() => {
            recordPlugin?.stopRecording();
          }}
          color="red"
        >
          Stop
        </Button>
      )}
      <div className="flex gap-x-5 bg-white/5 rounded-xl px-5 mt-3">
        {!isRecording && recordingBlob && (
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
        )}
        <div
          ref={containerRef}
          className={clsx(
            "w-full flex-shrink",
            !isRecording && !recordingBlob ? "h-0 pointer-events-none" : ""
          )}
        />
        {!isRecording && recordingBlob && (
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white font-mono">
              {`0:${Math.floor(currentTime).toString().padStart(2, "0")}`} /{" "}
              {`0:${Math.floor(recordingDuration).toString().padStart(2, "0")}`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

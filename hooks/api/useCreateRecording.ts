import { type RecordingWithRatings } from "@/models/Recording";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useCreateRecording = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      recordingName,
      file,
    }: {
      recordingName: string;
      file: Blob;
    }) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("recordingName", recordingName);
      const { data } = await axios.post<RecordingWithRatings>(
        "/api/recordings/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data;
    },
    onSuccess: (newRecording) => {
      queryClient.invalidateQueries({ queryKey: ["people"] });
      queryClient.setQueryData(
        ["recordings"],
        (old: RecordingWithRatings[]) => [...old, newRecording]
      );
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

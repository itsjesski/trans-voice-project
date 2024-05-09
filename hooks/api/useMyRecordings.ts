import { type RecordingWithRatings } from "@/models/Recording";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useMyRecordings = () => {
  return useQuery({
    queryKey: ["recordings"],
    queryFn: async () => {
      const { data } = await axios.get<
        Array<RecordingWithRatings & { _id: string }>
      >("/api/recordings/self");
      return data;
    },
  });
};

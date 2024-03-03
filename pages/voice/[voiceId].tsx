import { useRouter } from "next/router";

export default function Voice() {
  const router = useRouter();
  return <p>Post: {router.query.voiceId}</p>;
}

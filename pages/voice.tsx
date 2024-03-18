import { GetServerSideProps } from "next";
import Player from "../components/Player";
import VoiceDetailButtons from "../components/VoiceDetailButtons";
import VoiceRatingButtons from "../components/VoiceRatingButtons";

type Props = {};

const Index = ({}: Props) => {
  return (
    <>
      <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
        <div className="relative flex flex-col w-4/5 self-center mt-10">
          <div className="justify-self-center w-full justify-center">
            <h1 className="text-4xl font-extrabold dark:text-white">
              Step One: Listen
            </h1>
            <p className="text-white mt-3">
              Click play to listen to the recording. Make sure to listen very
              carefully and try to pick up on every detail.
            </p>
          </div>
        </div>
        <Player></Player>
        <div className="relative flex flex-col w-4/5 self-center mt-10">
          <div className="justify-self-center w-full justify-center">
            <h1 className="text-4xl font-extrabold dark:text-white">
              Step Two: Basic Feedback
            </h1>
            <p className="text-white mt-3">
              How does this voice sound to you? Is it femmine, masculine, or
              somewhere in between?
            </p>
          </div>
        </div>
        <VoiceRatingButtons></VoiceRatingButtons>
        <div className="relative flex flex-col w-4/5 self-center mt-10">
          <div className="justify-self-center w-full justify-center">
            <h1 className="text-4xl font-extrabold dark:text-white">
              Step Three (Optional): Advanced Feedback
            </h1>
            <p className="text-white mt-3">
              You can use the buttons below to give more specific details. These
              are optional. If you're unsure what a term means, you can skip
              this part!
            </p>
          </div>
        </div>
        <VoiceDetailButtons></VoiceDetailButtons>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

export default Index;

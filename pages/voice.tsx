import { GetServerSideProps } from "next";
import Player from "../components/Player";
import VoiceDetailButtons from "../components/VoiceDetailButtons";
import VoiceRatingButtons from "../components/VoiceRatingButtons";

type Props = {};

const Index = ({}: Props) => {
  return (
    <>
      <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
        <div className="relative flex flex-col w-full self-center">
          <div className="justify-self-center w-full justify-center">
            <h2 className="text-4xl font-extrabold dark:text-white">
              Voice Feedback
            </h2>
            <p className="text-white mt-3">
              Below you'll find a recording of a voice. Your feedback will help
              this person find the voice they're looking for. Just follow the
              steps below to get started! Everything here is anonymous, so
              please give honest feedback for every voice. If the recording
              contains inappropriate content, please report it.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col w-full self-center mt-20">
          <div className="justify-self-center w-full justify-center">
            <h2 className="text-3xl font-extrabold dark:text-white">
              Step One: Listen
            </h2>
            <p className="text-white mt-3">
              Click play to listen to the recording. Make sure to listen very
              carefully and try to pick up on every detail.
            </p>
          </div>
        </div>
        <Player></Player>
        <div className="relative flex flex-col w-full self-center mt-20">
          <div className="justify-self-center w-full justify-center">
            <h2 className="text-3xl font-extrabold dark:text-white">
              Step Two: Feedback
            </h2>
            <p className="text-white mt-3">
              How does this voice sound to you? Is it feminine, masculine, or
              somewhere in between?
            </p>
          </div>
        </div>
        <VoiceRatingButtons></VoiceRatingButtons>
        <div className="relative flex flex-col w-full self-center mt-20">
          <div className="justify-self-center w-full justify-center">
            <h2 className="text-3xl font-extrabold dark:text-white">
              Optional: Advanced Feedback
            </h2>
            <p className="text-white mt-3">
              You can use the buttons below to give more specific details. These
              are optional. If you're unsure what the terms mean, it's better to
              skip this part!
            </p>
          </div>
        </div>
        <VoiceDetailButtons></VoiceDetailButtons>

        <div className="relative flex w-full self-center mt-20 mb-20">
          <div className="cursor-pointer border hover:bg-green-400/70 text-white text-m leading-5 font-medium rounded-xl py-3 px-3 mx-3 text-center">
            Next voice, please!
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

export default Index;

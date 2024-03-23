import { GetServerSideProps } from "next";
import VoiceTable from "../components/VoiceTable";

type Props = {};

const Index = ({}: Props) => {
  return (
    <>
      <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
        <div className="relative flex flex-col w-full self-center">
          <div className="justify-self-center w-full justify-center">
            <h2 className="text-4xl font-extrabold dark:text-white">
              Dashboard
            </h2>
          </div>
        </div>
        <div className="relative flex flex-col w-full self-center mt-20">
          <div className="justify-self-center w-full justify-center">
            <h2 className="text-3xl font-extrabold dark:text-white">
              Your Recordings
            </h2>
            <p className="text-white mt-3">
              You can find your recordings below along with the feedback.
              Everything is anonymous. Don't be upset if you don't get the
              feedback you were hoping for. It's all part of the process. Keep
              practicing!
            </p>
          </div>
        </div>
        <div className="relative flex flex-col w-full self-center">
          <div className="justify-self-center w-full justify-center">
            <VoiceTable />
          </div>
        </div>
        <div className="relative flex flex-col w-full self-center">
          <div className="justify-self-center w-full justify-center">
            This is where user stats will show. How many recordings created, how
            many ratings given, etc.
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

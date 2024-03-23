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

import Hero from "../components/Hero";
import { GetServerSideProps } from "next";

type Props = {};

const Index = ({}: Props) => {
  return (
    <>
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-transblue opacity-75 font-bold leading-tight text-center md:text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-transblue via-white to-transpink">
            Share Your Voice!
          </span>
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-white">
          Get unbiased feedback on your voice from the community. Just upload a
          clip, let people review it, and then come back later to view your
          feedback!
        </p>
      </div>

      <div className="w-full xl:w-3/5 p-12 overflow-hidden">
        <img
          className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
          src="macbook.svg"
        />
      </div>

      <div className="mx-auto md:pt-16">
        <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
          Download our app:
        </p>
        <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
          <img
            src="App Store.svg"
            className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out"
          />
          <img
            src="Play Store.svg"
            className="h-12 transform hover:scale-125 duration-300 ease-in-out"
          />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

export default Index;

import { Container } from "@/components/Container";
import { GetServerSideProps } from "next";

type Props = {};

const Index = ({}: Props) => {
  return (
    <Container>
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-transblue opacity-75 font-bold leading-tight text-center md:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-transblue via-white to-transpink">
              Share Your Voice!
            </span>
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-white">
            Get unbiased feedback on your voice from the community. Just upload
            a clip, let people review it, and then come back later to view your
            feedback!
          </p>
        </div>

        <div className="w-full xl:w-3/5 p-12 overflow-hidden">
          <img
            className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
            src="macbook.svg"
          />
        </div>
      </div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

export default Index;

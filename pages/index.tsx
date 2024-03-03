import Hero from "../components/Hero";
import { GetServerSideProps } from "next";

type Props = {};

const Index = ({}: Props) => {
  return (
    <>
      <Hero></Hero>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

export default Index;

import { GetServerSideProps } from "next";
import VoiceTable from "../components/VoiceTable";
import { useSession, signIn, signOut } from "next-auth/react";
import { Container } from "@/components/Container";

type Props = {};

const Index = ({}: Props) => {
  const { data: session, status } = useSession();

  return (
    <PageWrapper>
      {session && session.user && (
        <Dashboard
          username={session.user.name!}
          avatarUrl={session.user.image!}
        />
      )}
    </PageWrapper>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="mt-20">
      <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
        {children}
      </div>
    </Container>
  );
};

const DashboardHeader = () => {
  return (
    <div className="relative flex flex-col w-full self-center mb-5">
      <div className="justify-self-center w-full justify-center">
        <h2 className="text-4xl font-extrabold dark:text-white">Dashboard</h2>
      </div>
    </div>
  );
};

const Dashboard = ({
  username,
  avatarUrl,
}: {
  username: string;
  avatarUrl?: string;
}) => {
  return (
    <>
      <DashboardHeader />
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
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

export default Index;

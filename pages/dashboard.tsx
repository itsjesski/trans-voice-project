import { GetServerSideProps } from "next";
import VoiceTable from "../components/VoiceTable";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {};

const Index = ({}: Props) => {
  const { data: session, status } = useSession();

  return (
    <PageWrapper>
      {session && session.user ? (
        <Dashboard
          username={session.user.name!}
          avatarUrl={session.user.image!}
        />
      ) : (
        <SignIn />
      )}
    </PageWrapper>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
      {children}
    </div>
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

const SignIn = () => {
  return (
    <>
      <DashboardHeader />
      <button
        type="button"
        onClick={() => signIn("discord")}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign in with Discord
      </button>
    </>
  );
};

const User: React.FC<{
  username: string;
  avatarUrl: string;
  onSignOutClick: () => void;
}> = ({ username, avatarUrl, onSignOutClick }) => {
  return (
    <div className="flex-shrink-0 block">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-20 w-20 rounded-full"
            src={avatarUrl}
            alt=""
          />
        </div>
        <div className="ml-3">
          <p className="text-base font-medium text-white">{username}</p>
          <a
            className="text-sm font-medium text-blue-400 hover:text-blue-600 cursor-pointer"
            onClick={() => onSignOutClick()}
          >
            Sign Out
          </a>
        </div>
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
      <User
        username={username}
        avatarUrl={avatarUrl ?? ""}
        onSignOutClick={() => signOut()}
      />
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

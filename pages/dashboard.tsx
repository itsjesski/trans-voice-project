import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { Container } from "@/components/Container";
import { RecordingsSection } from "@/components/dashboard/RecordingsSection";
import { StatsSection } from "@/components/dashboard/StatsSection";
import { GreetingHeader } from "@/components/dashboard/GreetingHeader";

type Props = {};

const Index = ({}: Props) => {
  const { data: session } = useSession();

  return (
    <Container className="mt-10">
      <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
        {session && session.user && (
          <div className="w-full">
            <GreetingHeader username={session.user.name ?? ""} />
            <StatsSection />
            <RecordingsSection />
          </div>
        )}
      </div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: {} };
};

export default Index;

import dayjs from "dayjs";

export const GreetingHeader = ({ username }: { username: string }) => {
  // determine if morning, afternoon, or evening with dayjs
  const currentHour = dayjs().hour();
  let greeting = "Hello";
  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return (
    <header className="mb-10">
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">
        {greeting}, {username}!
      </h1>
    </header>
  );
};

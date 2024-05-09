import dynamic from "next/dynamic";

export const withoutSsr = <T,>(Component: React.FC<T>) =>
  dynamic(() => Promise.resolve(Component), { ssr: false });

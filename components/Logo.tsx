import logoImage from "@/images/metaphonic-logo.svg";
import clsx from "clsx";
import Image from "next/image";

export const Logo = ({
  className,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof Image>,
  "src" | "alt" | "unoptimized"
>) => {
  return (
    <Image
      className={clsx("h-full w-full object-contain", className)}
      src={logoImage}
      alt=""
      unoptimized
      {...props}
    />
  );
};

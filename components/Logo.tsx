import logoImage from "@/images/metaphonic-logo.png";
import Image from "next/image";

export const Logo = (
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Image>,
    "src" | "alt" | "unoptimized"
  >
) => {
  return (
    <Image
      className="h-full w-full object-cover"
      src={logoImage}
      alt=""
      unoptimized
      {...props}
    />
  );
};

import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type LinkOKType = {
  href: string;
} & ComponentPropsWithoutRef<"a">;

const LinkNext = ({ href, children, ...other }: LinkOKType) => {
  return (
    <Link
      href={href}
      style={{ color: "inherit", textDecoration: "none" }}
      {...other}
    >
      {children}
    </Link>
  );
};

export default LinkNext;

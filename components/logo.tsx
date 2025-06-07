import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold">
      <span
        className="relative bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to right, #B88746 10%, #FDF5A6 150%)",
        }}
      >
        UI
        <span
          aria-hidden="true"
          className="absolute left-0 bottom-0 h-[4px] w-full rounded-full"
          style={{
            background: "linear-gradient(to right, #B88746 10%, #FDF5A6 150%)",
          }}
        />
      </span>
      <span className="text-2xl text-black dark:text-white">VIEW</span>
      <span className="text-sm text-muted-foreground ml-1">v1.0.0</span>
    </Link>
  );
};

export default Logo;

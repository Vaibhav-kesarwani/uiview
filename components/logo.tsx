import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold gap-2">
      UIVIEW
      <span className="text-sm text-muted-foreground ml-1">v1.0.0</span>
    </Link>
  );
};

export default Logo;

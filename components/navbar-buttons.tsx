import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PlusIcon, RocketIcon } from "lucide-react";

const NavbarButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href={"/login"}>
        <Button className="bg-blue-600 p-5 hidden md:inline-flex cursor-pointer hover:bg-blue-500 text-white">
          <PlusIcon className="h-4 w-4" />
          <p>Create</p>
        </Button>
      </Link>
      <Button
        variant="outline"
        className="bg-muted-foreground p-5 hidden md:inline-flex"
      >
        <RocketIcon className="h-4 w-4" />
        <Link href="/signup">Join the Community</Link>
      </Button>
    </div>
  );
};

export default NavbarButtons;

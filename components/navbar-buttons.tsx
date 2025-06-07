import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PlusIcon, RocketIcon } from "lucide-react";
import CreateButton from "./create-button";

const NavbarButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href={"/login"}>
        <CreateButton />
      </Link>
      <Link href={"/create"}>
        <Button
          variant="outline"
          className="bg-muted-foreground p-5 hidden md:inline-flex cursor-pointer text-muted-foreground"
        >
          <RocketIcon className="h-5 w-5" />
          Join the Community
        </Button>
      </Link>
    </div>
  );
};

export default NavbarButtons;

import Link from "next/link";
import React from "react";
import CreateButton from "./create-button";
import SearchBar from "./search-bar";

const NavbarButtons = () => {
  return (
    <div className="flex items-center gap-5">
      <SearchBar />
      <Link href={"/login"}>
        <CreateButton />
      </Link>
    </div>
  );
};

export default NavbarButtons;

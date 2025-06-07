"use client";

import * as React from "react";
import { Navbar } from "./navbar";
import NavbarButtons from "./navbar-buttons";
import Logo from "./logo";
import SearchBar from "./search-bar";

export function Header() {
  return (
    <header className="mt-4 mb-8 w-full mx-auto px-4 md:px-8 lg:px-12">
      <div className="mb-4 flex w-full items-center justify-between">
        <Logo />
        <Navbar />
        <SearchBar />
        <NavbarButtons />
      </div>
    </header>
  );
}

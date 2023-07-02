import React from "react";
import Link from "next/link";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = null;
  return (
    <nav className=" flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <h1 className="text-2xl font-bold ">Designable</h1>
        </Link>
        <ul className="xl:flex hidden text-small gap-7 ">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

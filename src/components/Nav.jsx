import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <Image src="/next.svg" fill/>
      </div>

      <div className="right">
        <Link href={"/"}>Home</Link>
        <Link href={"/amigo"}>CRUD</Link>
      </div>
    </nav>
  );
};

export default Nav;

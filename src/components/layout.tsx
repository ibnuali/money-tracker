import React from "react";
import SideBar from "./SideBar/SideBar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <SideBar />
      <main className="flex-1 px-72">{children}</main>
    </>
  );
}

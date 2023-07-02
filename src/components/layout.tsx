import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import Navbar from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const resizeLayout = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <SideBar resizeLayout={resizeLayout} />
      <Navbar />
      <main
        className={`mx-auto duration-500 ${
          isSidebarOpen ? "sm:ml-24 lg:ml-72" : "sm:ml-[120px]"
        } px-4 pt-10`}
      >
        {children}
      </main>
    </>
  );
}

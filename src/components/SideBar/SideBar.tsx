import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import {
  RiAddLine,
  RiBriefcase2Line,
  RiDashboardLine,
  RiMenuLine,
  RiSettings2Line,
  RiUser3Line,
} from "react-icons/ri";

export const sideBarTitle = [
  {
    title: "Dashboard",
    icon: RiDashboardLine,
    href: "/",
  },
  {
    title: "Categories",
    icon: RiBriefcase2Line,
    href: "/categories",
  },
  {
    title: "Settings",
    icon: RiSettings2Line,
    href: "/settings",
  },
  {
    title: "Profile",
    icon: RiUser3Line,
    href: "/profile",
  },
];

function SideBar({ resizeLayout }: { resizeLayout: () => void }) {
  const router = useRouter();

  const resizeSideBar = () => {
    const sideBar = document.getElementById("docs-sidebar");
    resizeLayout();
    if (sideBar) {
      sideBar.classList.toggle("lg:w-64");

      const sideBarLogo = document.getElementById("logo");
      const sideBarTitles = document.querySelectorAll(
        ".hs-accordion-group ul li a span"
      );

      const menuBar = document.getElementById("menu");

      if (sideBarLogo) {
        sideBarLogo.classList.toggle("hidden");
      }

      sideBarTitles.forEach((title) => {
        title.classList.toggle("lg:block");
      });

      console.log(menuBar);
      menuBar?.classList.toggle("-ml-3");
    }
  };

  return (
    <>
      <div
        id="docs-sidebar"
        className="duration-500  w-24 sm:block hidden fixed top-0 left-0 bottom-0 z-[60] lg:w-64 bg-white border-r border-gray-200  overflow-y-auto scrollbar-y dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="flex items-center gap-6 w-full px-6 py-0 lg:py-5 ">
          <div className="hidden lg:block">
            <div
              id="logo"
              className="text-xl font-semibold dark:text-white"
              aria-label="Brand"
            >
              Money Tracker
            </div>
          </div>
          <RiMenuLine
            id="menu"
            onClick={resizeSideBar}
            className="cursor-pointer hidden lg:block text-2xl"
          />
        </div>
        <nav
          className="hs-accordion-group px-6 py-4 lg:py-0 w-fit lg:w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-5 lg:space-y-1.5">
            {sideBarTitle.map((item, index) => {
              return (
                // <Tooltip message={item.title} key={index}>
                <li key={index}>
                  <Link href={item.href}>
                    <div
                      className={`${
                        router.asPath === item.href &&
                        "bg-blue-500 text-gray-100"
                      } font-semibold flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md hover:bg-blue-500 hover:text-gray-100 dark:bg-gray-900 dark:text-white`}
                    >
                      <item.icon className="text-2xl" />
                      <span className="text-md hidden lg:block">
                        {item.title}
                      </span>
                    </div>
                  </Link>
                </li>
                // </Tooltip>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* mobile bottom menu */}
      <div className="fixed z-50 w-full sm:hidden h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-t-2xl bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          {sideBarTitle.map((item, index) => {
            if (index >= 0 && index < 2) {
              return (
                <button
                  key={index}
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-100 dark:hover:bg-gray-800 group"
                >
                  <item.icon className="text-gray-500" size={25} />
                  <span className="sr-only">{item.title}</span>
                </button>
              );
            }
          })}
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-500 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
            >
              <RiAddLine className="text-white" size={30} />
              <span className="sr-only">Add</span>
            </button>
          </div>
          {sideBarTitle.map((item, index) => {
            if (index >= 2 && index < 4) {
              return (
                <button
                  key={index}
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-100 dark:hover:bg-gray-800 group"
                >
                  <item.icon className="text-gray-500" size={25} />
                  <span className="sr-only">{item.title}</span>
                </button>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default SideBar;

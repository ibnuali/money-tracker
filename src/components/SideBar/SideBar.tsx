import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { RiAppsLine, RiBriefcase2Line, RiSettings2Line } from "react-icons/ri";

export const sideBarTitle = [
  {
    title: "Dashboard",
    icon: RiAppsLine,
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
];

function SideBar() {
  const router = useRouter();

  return (
    <div
      id="docs-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="px-6">
        <a
          className="flex-none text-xl font-semibold dark:text-white"
          href="javascript:;"
          aria-label="Brand"
        >
          Money Tracker
        </a>
      </div>
      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          {sideBarTitle.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.href}>
                  <div
                    className={`${
                      router.asPath === item.href && "bg-blue-500 text-gray-100"
                    } font-semibold flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-blue-500 hover:text-gray-100 dark:bg-gray-900 dark:text-white`}
                    
                  >
                    <item.icon size={20} />
                    <span className="text-md">{item.title}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <ul className="space-y-1.5">
          <li>
            <Link href="/">
              <div className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white">
                <RiAppsLine size={20} />
                <span className="text-md">Dashboard</span>
              </div>
            </Link>
          </li>

          <li>
            <Link href="/categories">
              <div className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300">
                <RiBriefcase2Line size={20} />
                <span className="text-md">Category</span>
              </div>
            </Link>
          </li>

          <li>
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
              href="javascript:;"
            >
              <RiSettings2Line size={20} />
              <span className="text-md">Settings</span>
            </a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
}

export default SideBar;

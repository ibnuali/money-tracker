import React from "react";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400 ${className}`}>
      {children}
    </div>
  );
};

export default Card;

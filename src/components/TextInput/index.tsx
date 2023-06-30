import React from "react";

const TextInput = () => {
  return (
    <input
      type="text"
      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
      placeholder="Default size"
    />
  );
};

export default TextInput;

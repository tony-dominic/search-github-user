import React from "react";

interface InputProps {
  value: string;
  type?: "text" | "number";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type = "text", value, onChange }: InputProps) => {
  return (
    <input
      type={type}
      className="w-full rounded-lg border-2 border-gray-300 bg-white p-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter GitHub username"
      value={value}
      onChange={onChange}
    />
  );
};

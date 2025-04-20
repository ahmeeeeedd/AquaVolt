import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  primary = false,
  secondary = false,
  className = "",
  type = "button",
}) => {
  const baseClasses =
    "px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styleClasses = primary
    ? "bg-teal-600 hover:bg-teal-700 text-white focus:ring-teal-500"
    : secondary
    ? "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
    : "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${styleClasses} ${className}`}
    >
      {children}
    </button>
  );
};

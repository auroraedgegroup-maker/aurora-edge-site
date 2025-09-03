import * as React from "react";

export function Button({ className = "", children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold bg-blue-600 text-white hover:bg-blue-500 transition shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

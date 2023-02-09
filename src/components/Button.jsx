import React from "react";

export default function Button({ onClick, children, ...props }) {
  return (
    <button onClick={onClick} className="btn" {...props}>
      {children}
    </button>
  );
}

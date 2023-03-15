import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="error text-center">
      <div className="error--title">
        <span>
          <span>4</span>
        </span>
        <span>
          <span>0</span>
        </span>
        <span>
          <span>4</span>
        </span>
      </div>
      <div className="error__message">
        <h1 className="error__message--title">Page not found</h1>
        <p className="error__message--description">
          Sorry but this page does not exist!
        </p>
      </div>
      <Link href="/">
        <button className="btn hover-grow-2">Go Home</button>
      </Link>
    </div>
  );
}

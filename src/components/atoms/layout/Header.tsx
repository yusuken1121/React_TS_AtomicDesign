import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-center w-full h-24   bg-slate-500">
      <Link
        className="link-base mr-3 w-30 h-14 flex items-center justify-center"
        to="/"
      >
        Home
      </Link>
      <Link
        className="link-base mr-3 w-30 h-14 flex items-center justify-center"
        to="/users"
      >
        User
      </Link>
    </header>
  );
};

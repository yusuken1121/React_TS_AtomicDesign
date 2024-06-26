import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className="flex justify-around items-center w-full h-24 bg-slate-500">
      <h1 className="text-3xl text-white bold ">REACT-ROUTER-V6</h1>

      <div className="flex items-center justify-center">
        <Link
          className="link-base mr-3 w-30 h-14 flex items-center justify-center"
          to="/"
        >
          Top
        </Link>
        <Link
          className="link-base mr-3 w-30 h-14 flex items-center justify-center"
          to="/users"
        >
          User
        </Link>
      </div>
    </header>
  );
};

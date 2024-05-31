import { FC } from "react";
import { UserCardProps } from "../../../types/userCardProps";

export const UserCard = ({
  name,
  email,
  tell,
  company,
  website,
}: UserCardProps) => {
  return (
    <div className="flex flex-col w-30 border-solid border-2 border-slate-500 rounded-lg m-3 bg-slate-400 p-3 box-border	">
      <div className=" flex w-full my-3 items-center justify-center">
        <img
          className="w-32 h-32 "
          src="./src/assets/icon_Aru.jpg"
          alt="profile"
        />
      </div>
      <div className="bg-white p-2 rounded-lg">
        <p className="font-bold">{name}</p>
        <dl className="flex items-center">
          <dt className="flex-1">E-mail</dt>
          <dd className="dd-base">{email}</dd>
        </dl>
        <dl className="flex items-center">
          <dt className="flex-1">Tell</dt>
          <dd className="dd-base flex-3">{tell}</dd>
        </dl>
        <dl className="flex items-center">
          <dt className="flex-1">Company</dt>
          <dd className="dd-base flex-3">{company}</dd>
        </dl>
        <dl className="flex items-center">
          <dt className="flex-1">Website</dt>
          <dd className="dd-base flex-3">{website}</dd>
        </dl>
      </div>
    </div>
  );
};

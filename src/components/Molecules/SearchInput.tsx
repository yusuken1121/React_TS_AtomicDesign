import { FC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
export interface placeHolder {
  placeHolder: string;
}

export const SearchInput: FC<placeHolder> = ({ placeHolder }) => {
  return (
    <div className="flex">
      <input
        className="input-base w-48"
        type="text"
        placeholder={placeHolder}
      />
      <PrimaryButton children={"search"} />
    </div>
  );
};

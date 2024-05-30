import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PrimaryButton: FC<Props> = ({ children }) => {
  return (
    <div>
      <button className="button-base">{children}</button>
    </div>
  );
};

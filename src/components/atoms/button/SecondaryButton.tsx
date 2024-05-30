import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SecondaryButton: FC<Props> = ({ children }) => {
  return (
    <div>
      <button className="button-second">{children}</button>
    </div>
  );
};

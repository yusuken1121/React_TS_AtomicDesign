import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const SecondaryButton: FC<Props> = ({ children, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="button-second">
        {children}
      </button>
    </div>
  );
};

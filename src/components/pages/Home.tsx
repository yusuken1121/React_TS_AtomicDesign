import { Outlet } from "react-router-dom";
import { PageStyle } from "../templates/PageStyle";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <PageStyle>
      <main className="bg-slate-200 min-h-screen">
        <Outlet />
      </main>
    </PageStyle>
  );
};

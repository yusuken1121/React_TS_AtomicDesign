import { Outlet } from "react-router-dom";
import { PageStyle } from "../templates/PageStyle";
import { FC } from "react";
import { UserProvider } from "../../providers/UserProvider";

export const Home: FC = () => {
  return (
    <UserProvider>
      <PageStyle>
        <main className="bg-slate-200 min-h-screen">
          <Outlet />
        </main>
      </PageStyle>
    </UserProvider>
  );
};

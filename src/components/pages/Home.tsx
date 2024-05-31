import { Outlet } from "react-router-dom";
import { HeaderOnly } from "../templates/PageStyle";

export const Home = () => {
  return (
    <HeaderOnly>
      <main className="bg-slate-200 min-h-screen">
        <Outlet />
      </main>
    </HeaderOnly>
  );
};

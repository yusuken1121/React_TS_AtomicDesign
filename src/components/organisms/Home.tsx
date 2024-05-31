import { Outlet } from "react-router-dom";
import { HeaderOnly } from "../templates/HeaderOnly";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Home = () => {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="bg-slate-200 min-h-screen pt-5 pl-2">{children}</main>
      <Footer />
    </>
  );
};

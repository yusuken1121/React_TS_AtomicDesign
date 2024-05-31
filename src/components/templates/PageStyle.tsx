import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const PageStyle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

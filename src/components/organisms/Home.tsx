import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Home = () => {
  return (
    <div>
      <PrimaryButton children={"test"} />
      <SecondaryButton children={"Search"} />
    </div>
  );
};

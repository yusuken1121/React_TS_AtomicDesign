import { PrimaryButton } from "../button/PrimaryButton";
import { SecondaryButton } from "../button/SecondaryButton";

export const Home = () => {
  return (
    <div>
      <PrimaryButton children={"test"} />
      <SecondaryButton children={"Search"} />
    </div>
  );
};

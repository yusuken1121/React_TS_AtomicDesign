import { UserCardProps } from "../../types/userCardProps";
import { SearchInput } from "../Molecules/SearchInput";
import { UserCard } from "./user/UserCard";

export const User = () => {
  const user: UserCardProps = {
    name: "Aru",
    email: "aaa@gamil.com",
    tell: 1234567890,
    company: "Amazon",
    website: "aaa.com",
  };

  return (
    <div>
      <SearchInput placeHolder="Enter a keyword here" />
      <UserCard
        name={user.name}
        email={user.email}
        tell={user.tell}
        company={user.company}
        website={user.website}
      />
    </div>
  );
};

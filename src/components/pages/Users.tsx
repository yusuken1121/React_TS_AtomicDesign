import { UserCardProps } from "../../types/userCardProps";
import { SearchInput } from "../Molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users: UserCardProps[] = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Aru-${val}`,
    email: "aaa@gamil.com",
    tell: 1234567890,
    company: "Amazon",
    website: "aaa.com",
  };
});

export const Users = () => {
  return (
    <div className="p-3">
      <SearchInput placeHolder="Enter a keyword here" />
      <div className="flex flex-wrap">
        {users.map((user) => {
          return (
            <UserCard
              name={user.name}
              tell={user.tell}
              email={user.email}
              company={user.company}
              website={user.website}
            />
          );
        })}
      </div>
    </div>
  );
};

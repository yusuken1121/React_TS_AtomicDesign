import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";
import { useContext } from "react";

export const Top = () => {
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const onClickAdmin = () => {
    const newUserInfo = { isAdmin: true };
    setUserInfo(newUserInfo);
    navigate("/users"); // pass newUserInfo directly because it can't be in time to reflect the value
  };

  const onClickGeneral = () => {
    const newUserInfo = { isAdmin: false };
    setUserInfo(newUserInfo);
    navigate("/users");
  };

  return (
    <div className=" pt-5 pl-2 flex flex-col items-center justify-center">
      <h2 className="bold text-3xl">This is the Top Page</h2>
      <div className="flex flex-col h-24 items-start justify-between box-border m-3">
        <SecondaryButton onClick={onClickAdmin}>Admin</SecondaryButton>
        <SecondaryButton onClick={onClickGeneral}>General User</SecondaryButton>
      </div>
    </div>
  );
};

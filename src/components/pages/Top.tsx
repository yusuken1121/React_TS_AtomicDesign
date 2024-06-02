import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const navigate = useNavigate();
  const adminState = { role: "admin" };
  const onClickAdmin = () => navigate("/users", { state: adminState });
  const onClickGeneral = () => alert("Admin");

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

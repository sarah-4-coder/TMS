import { Link } from "@remix-run/react";
import { UserProfile } from "../header/user-profile";
import { useUserStore } from "@app/store/user.store";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export const SubHeader = (): JSX.Element => {
  const { user } = useUserStore();

  const iconBaseClass =
    "w-[24px] h-[24px] text-icon rounded-full flex items-center justify-center hover:bg-background-brand-subtlest hover:text-icon-brand";

  return (
    <section className="flex items-center justify-between px-5 py-4 shadow-xs">
      <div>
        <Link
          to="/"
          className="flex cursor-pointer items-center gap-12 rounded px-3 py-2 text-font hover:bg-background-brand-subtlest hover:text-font-brand flex-[0.5]"
        > 
        <IoArrowBackCircleOutline className="text-4xl"/>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        {user.name}
        <UserProfile />
      </div>
    </section>
  );
};

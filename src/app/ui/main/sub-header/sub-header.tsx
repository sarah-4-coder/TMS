import { Link } from "@remix-run/react";
import { UserProfile } from "../header/user-profile";
import { useUserStore } from "@app/store/user.store";

export const SubHeader = (): JSX.Element => {
  const { user } = useUserStore();

  const iconBaseClass =
    "w-[24px] h-[24px] text-icon rounded-full flex items-center justify-center hover:bg-background-brand-subtlest hover:text-icon-brand";

  return (
    <section className="flex justify-end py-4 px-5 shadow-xs items-center gap-2">
      {user.name}
      <UserProfile />
    </section>
  );
};

import { Link } from "@remix-run/react";
import { SelctTheme } from "./select-theme";

export const Header = (): JSX.Element => {
  const iconBaseClass =
    "w-[24px] h-[24px] text-icon rounded-full flex items-center justify-center hover:bg-background-brand-subtlest hover:text-icon-brand";

  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-elevation-surface-raised px-5 py-2 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)]">
      <figure className="flex-1">
        <img src="/SVGs/logo.svg" width={200} height={20} alt="Logo" />
      </figure>
      <h2 className="ml-2 flex-1 text-3xl text-center">Task Management System</h2>
      <section className="flex-1 flex justify-end">
        <SelctTheme />
      </section>
    </header>
  );
};

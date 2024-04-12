import { Link } from "@remix-run/react";
import { SelctTheme } from "./select-theme";

export const Header = (): JSX.Element => {
  const iconBaseClass =
    "w-[24px] h-[24px] text-icon rounded-full flex items-center justify-center hover:bg-background-brand-subtlest hover:text-icon-brand";

  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-elevation-surface-raised px-5 py-2 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)]">
      <section>
        <Link
          to="/"
          className="flex cursor-pointer items-center gap-12 rounded px-3 py-2 text-font hover:bg-background-brand-subtlest hover:text-font-brand"
        >
          <img src="/SVGs/Emblem_of_India.png" width={30} height={20} alt="Logo" />
          <span className="ml-2">Task Management System</span>
        </Link>
      </section>
      <section className="flex items-center gap-4">
      <img src="/SVGs/logo.svg" width={200} height={20} alt="Logo" />
        {/* <Tooltip title="About">
          <button
            aria-label="About this website"
            disabled
            className={cx(iconBaseClass, "cursor-not-allowed")}
          >
            <HiQuestionMarkCircle size={24} />
          </button>
        </Tooltip> */}
        {/* <Tooltip title="Github">
          <a
            href="https://github.com/daniserrano7/jira-clone"
            className={iconBaseClass}
            aria-label="Go to my Github"
          >
            <AiFillGithub size={24} />
          </a>
        </Tooltip> */}
        <SelctTheme />

      </section>
    </header>
  );
};

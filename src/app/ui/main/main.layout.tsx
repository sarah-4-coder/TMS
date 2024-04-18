import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header";
import { SubHeader } from "./sub-header";
import { Footer } from "./footer";

export const MainLayout = ({ user }: Props) => {
  return (
    <UserContextProvider user={user}>
      <div className="flex flex-col h-full">
        <div className="min-h-screen">
          <Header />
          <SubHeader />
          <Outlet />
        </div>
        <Footer />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}

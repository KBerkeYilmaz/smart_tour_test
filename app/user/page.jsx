"use client";
import AccountList from "./AccountList";
import AccountUser from "./AccountUser";
import AccountSignOutButton from "./AccountSignOutButton";
import { useSession } from "next-auth/react";




const User = () => {
  const { data: session } = useSession();
  const userData = session?.user || {};
  if(!session){
    return <div>loading...</div>
  }

  return (
    <main className="flex flex-col justify-start items-center w-screen min-h-screen">
      <AccountUser />
      <AccountList />
      <AccountSignOutButton />
    </main>
  );
};

export default User;

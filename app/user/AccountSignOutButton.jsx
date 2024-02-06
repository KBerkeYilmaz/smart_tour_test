"use client";
import { signOut } from "next-auth/react";

const AccountSignOutButton = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: "https://localhost:3000/sign_in" });
  };

  return (
    <button
      className="w-full bg-red-700 text-white h-[3.12rem] rounded-md"
      onClick={handleSignOut} // Use the handler function here
    >
      Sign out
    </button>
  );
};

export default AccountSignOutButton;

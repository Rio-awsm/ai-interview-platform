import { Button } from "@/components/ui/button";
import { getCurrentUser, isAuthenticated, signOut } from "@/lib/actions/auth.actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const Rootlayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();
  const isUserAuth = await isAuthenticated();
  if (!isUserAuth) redirect("/sign-in");

  const handleSignOut = async () => {
    "use server";
    await signOut();
    redirect("/sign-in");
  };

  const getInitials = (name?: string) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">Job Ready</h2>
        </Link>

        <div className="flex items-center gap-4">
          {user && (
            <>
            <div className="w-11 h-11 text-[12px] rounded-full bg-primary-500 text-white border border-white flex justify-center items-center cursor-pointer">
              {getInitials(user.name)}
            </div>

            <Button onClick={handleSignOut}>Log Out</Button>
            </>
          )}
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Rootlayout;

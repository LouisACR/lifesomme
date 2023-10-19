import TextLogo from "@/components/TextLogo";
import React from "react";
import AuthComp from "@/components/AuthComp";

const AuthPage = () => {
  return (
    <div className="flex flex-col h-screen w-full md:p-5">
      <TextLogo className="mx-auto text-5xl mt-12 md:mt-4 mb-12" />
      <AuthComp />
    </div>
  );
};

export default AuthPage;

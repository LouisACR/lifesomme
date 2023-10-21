import RegisterComp from "@/components/RegisterComp";
import TextLogo from "@/components/TextLogo";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex flex-col h-screen w-full md:p-5">
      <TextLogo className="mx-auto text-5xl mt-12 md:mt-4 mb-12" />
      <RegisterComp />
    </div>
  );
};

export default RegisterPage;

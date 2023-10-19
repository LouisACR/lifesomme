import { Button } from "@/components/Button";
import Card from "@/components/Card";
import { Input } from "@/components/Input";
import TextLogo from "@/components/TextLogo";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import React from "react";
import Link from "next/link";

const AuthPage = () => {
  return (
    <div className="flex flex-col h-screen w-full md:p-5">
      <TextLogo className="mx-auto text-5xl mt-4 mb-12" />
      <Card className="mx-auto w-[350px] gap-y-3">
        <h1 className="mx-auto text-xl font-medium text-stone-700 mb-4">
          Log into your account
        </h1>
        <Button variant="outline" className="group hover:text-black/80">
          <FcGoogle className="group-hover:opacity-70 mr-2 text-xl transition-all" />
          Login with Google
        </Button>
        <Button variant="outline" className="group hover:text-black/80">
          <BsLinkedin className="text-[#0e76a8] group-hover:opacity-70 mr-2 text-xl transition-all" />
          Login with LinkedIn
        </Button>
        <hr className="my-2" />
        <span className="relative -mb-8 -top-8 mx-auto bg-stone-50 px-4 font-medium">
          OR
        </span>
        <Input type="email" placeholder="Your Email address" />
        <Input type="password" placeholder="Your Password" />
        <Button>LOG IN</Button>
        <Button variant="link" className="text-md" asChild>
          <Link href="/register">I don&apos;t have an account yet</Link>
        </Button>
      </Card>
    </div>
  );
};

export default AuthPage;

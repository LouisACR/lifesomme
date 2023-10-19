import { Button } from "@/components/Button";
import Card from "@/components/Card";
import { Input } from "@/components/Input";
import TextLogo from "@/components/TextLogo";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import React from "react";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex flex-col h-screen w-full md:p-5">
      <TextLogo className="mx-auto text-5xl mt-12 md:mt-4 mb-12" />
      <Card className="mx-auto w-[350px] lg:w-[400px] gap-y-3">
        <h1 className="mx-auto text-xl font-medium text-stone-700 mb-4">
          Create a new account
        </h1>
        <Button
          size="lg"
          variant="outline"
          className="group hover:text-black/80"
        >
          <FcGoogle className="group-hover:opacity-70 mr-2 text-xl transition-all" />
          Register with Google
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="group hover:text-black/80"
        >
          <BsLinkedin className="text-[#0e76a8] group-hover:opacity-70 mr-2 text-xl transition-all" />
          Register with LinkedIn
        </Button>
        <hr className="my-2" />
        <span className="relative -mb-8 -top-8 mx-auto bg-stone-50 px-4 font-medium">
          OR
        </span>
        <Input
          type="text"
          autoComplete="given-name"
          placeholder="Your First Name"
        />
        <Input
          type="text"
          autoComplete="family-name"
          placeholder="Your Last Name"
        />
        <Input
          type="email"
          autoComplete="email"
          placeholder="Your Email address"
        />
        <Input
          type="password"
          autoComplete="new-password"
          placeholder="Your Password"
        />
        <Button size="lg">CREATE MY ACCOUNT</Button>
        <Button variant="link" className="text-md" asChild>
          <Link href="/login">I already have an account</Link>
        </Button>
      </Card>
    </div>
  );
};

export default RegisterPage;

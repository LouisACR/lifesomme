"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "./Card";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { Button } from "./Button";
import { Input } from "./Input";
import Link from "next/link";
import { AuthError, Provider } from "@supabase/supabase-js";
import { cn } from "@/libs/utils";

const RegisterComp = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<AuthError | null>(null);

  const user = supabaseClient.auth.getUser();
  useEffect(() => {
    Promise.resolve(user).then((u) => {
      if (u.data.user) {
        router.push("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignInWithOAuth = async (provider: Provider) => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: provider,
    });
    if (error) {
      setError(error);
    }
    if (data.url) {
      router.push("/");
    }
  };

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    if (confirm !== password) {
      setError({ message: "Passwords don't match" } as AuthError);
      return;
    }
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: {
          fullName: `${firstName} ${lastName}`,
          firstName,
          lastName,
        },
      },
    });
    setError(error);
    if (data.user) {
      router.push("/");
    }
  };
  return (
    <Card className="mx-auto w-[350px] lg:w-[400px] gap-y-3">
      <h1 className="mx-auto text-xl font-medium text-stone-700 mb-4">
        Create your account
      </h1>
      <Button
        onClick={() => handleSignInWithOAuth("google")}
        size="lg"
        variant="outline"
        className="group hover:text-black/80 dark:hover:text-white/80"
      >
        <FcGoogle className="group-hover:opacity-70 mr-2 text-xl transition-all" />
        Register with Google
      </Button>
      <Button
        onClick={() => handleSignInWithOAuth("twitter")}
        size="lg"
        variant="outline"
        className="group hover:text-black/80 dark:hover:text-white/80"
      >
        <RiTwitterXFill className="group-hover:opacity-70 -ml-5 mr-5 text-left text-xl transition-all" />
        Register with X
      </Button>
      <Button
        onClick={() => handleSignInWithOAuth("linkedin_oidc")}
        size="lg"
        variant="outline"
        className="group hover:text-black/80 dark:hover:text-white/80"
      >
        <BsLinkedin className="text-[#0e76a8] group-hover:opacity-70 mr-2 text-xl transition-all" />
        Register with LinkedIn
      </Button>
      <hr className="my-2" />
      <span className="relative -mb-8 -top-8 mx-auto bg-stone-50 dark:bg-stone-950 px-4 font-medium">
        OR
      </span>
      <div
        className={cn(
          error
            ? "p-2 px-4 bg-red-100 dark:bg-red-800 w-full rounded-md"
            : "hidden"
        )}
      >
        {error?.message}
      </div>
      <form className="flex flex-col gap-y-3" onSubmit={handleSignUp}>
        <Input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          autoComplete="given-name"
          required
          placeholder="Your First name"
        />
        <Input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          autoComplete="family-name"
          required
          placeholder="Your Last name"
        />
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="email"
          required
          placeholder="Your Email address"
        />
        <Input
          type="password"
          placeholder="Your Password"
          autoComplete="new-password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Input
          type="password"
          placeholder="Please confirm your password"
          autoComplete="new-password"
          required
          onChange={(e) => setConfirm(e.target.value)}
          value={confirm}
        />
        <Button size="lg" type="submit">
          CREATE MY ACCOUNT
        </Button>
      </form>
      <Button variant="link" className="text-md" asChild>
        <Link href="/login">I already have an account</Link>
      </Button>
    </Card>
  );
};

export default RegisterComp;

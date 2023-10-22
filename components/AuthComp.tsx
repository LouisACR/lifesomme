"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "./Card";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { Button } from "./Button";
import { Input } from "./Input";
import Link from "next/link";
import { AuthError, Provider } from "@supabase/supabase-js";
import { cn } from "@/libs/utils";
import { RiTwitterXFill } from "react-icons/ri";

const AuthComp = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    setError(error);
    if (data.user) {
      router.push("/");
    }
  };
  return (
    <Card className="mx-auto w-[350px] lg:w-[400px] gap-y-3">
      <h1 className="mx-auto text-xl font-medium text-stone-700 dark:text-stone-200 mb-4">
        Log into your account
      </h1>
      <Button
        onClick={() => handleSignInWithOAuth("google")}
        size="lg"
        variant="outline"
        className="group hover:text-black/80 dark:hover:text-white/80"
      >
        <FcGoogle className="group-hover:opacity-70 mr-2 text-xl transition-all" />
        Login with Google
      </Button>
      <Button
        onClick={() => handleSignInWithOAuth("twitter")}
        size="lg"
        variant="outline"
        className="group hover:text-black/80 dark:hover:text-white/80"
      >
        <RiTwitterXFill className="group-hover:opacity-70 -ml-5 mr-5 text-left text-xl transition-all" />
        <span className="text-right">Login with X</span>
      </Button>
      <Button
        onClick={() => handleSignInWithOAuth("linkedin_oidc")}
        size="lg"
        variant="outline"
        className="group hover:text-black/80 dark:hover:text-white/80"
      >
        <BsLinkedin className="text-[#0e76a8] group-hover:opacity-70 mr-2 text-xl transition-all" />
        Login with LinkedIn
      </Button>
      <hr className="my-2" />
      <span className="relative -mb-8 -top-8 mx-auto bg-stone-50 dark:bg-stone-800 px-4 font-medium">
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
      <form className="flex flex-col gap-y-3" onSubmit={handleSignIn}>
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
          autoComplete="current-password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button size="lg" type="submit">
          LOG IN
        </Button>
      </form>
      <Button variant="link" className="text-md" asChild>
        <Link href="/register">I don&apos;t have an account yet</Link>
      </Button>
    </Card>
  );
};

export default AuthComp;

"use client";
import { useState } from "react";
import { Button } from "./Button";
import { ImSpinner10 } from "react-icons/im";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  function logout() {
    setLoading(true);
    const res = fetch("/auth/signout");
    Promise.resolve(res).then((data) => {
      setLoading(false);
      if (data.status == 200) {
        router.push("/login");
      }
    });
  }
  return (
    <Button variant="link" onClick={logout} disabled={isLoading}>
      {isLoading && <ImSpinner10 className="animate-spin h-4 w-4 mr-3" />}
      Logout
    </Button>
  );
};

export default LogoutButton;

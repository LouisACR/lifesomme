"use client";

import { useUser } from "@/hooks/useUser";
import LogoutButton from "./LogoutButton";

const ProfileCard = () => {
  const user = useUser();
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={user.userDetails?.avatar_url!}
        alt="avatar"
        width={50}
        height={50}
      />
      {user.userDetails?.full_name}
      <LogoutButton />
    </div>
  );
};

export default ProfileCard;

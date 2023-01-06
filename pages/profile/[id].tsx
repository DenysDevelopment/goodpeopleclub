import { useRouter } from "next/router";
import React from "react";

const Profile = () => {
  const router = useRouter();
  return <div>{router.query.id}</div>;
};
export default Profile;

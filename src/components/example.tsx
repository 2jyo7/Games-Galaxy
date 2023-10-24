

"use client";
import { useUser } from "@clerk/nextjs";
 
export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }
 
  return <div className="flex justify-between mx-auto p-5">Hello, {user.firstName} welcome to Clerk</div>;
}
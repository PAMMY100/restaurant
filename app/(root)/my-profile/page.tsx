

import { signOut } from "@/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

async function logoutAction() {
  "use server";
  await signOut();
  redirect("/sign-in"); // must be used after await signOut()
}

export default function LogoutPage() {

  
  return (
    <form action={logoutAction} method="post">
      <Button type="submit">Logout</Button>
    </form>
  );
}

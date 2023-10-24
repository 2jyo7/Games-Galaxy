
import GamesDisplay from "@/components/GamesDisplay ";
import Example from "@/components/example ";
import { UserButton } from "@clerk/nextjs"
export default function Home() {
  return (
    <>
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
     <Example />
      <GamesDisplay />
     
    </>
  )
}
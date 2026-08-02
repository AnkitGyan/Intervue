import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { checkUser } from "@/lib/checkUser";


export default async function Header(){
  const user = await checkUser();
  return (
   <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-3 border-b border-white/7 backdrop-blur-xl">
    {/* Logo */}
    <Link href="/">
        <Image
          src="/logo.png"
          alt="Prept Logo"
          width={100}
          height={100}
          className="h-11 w-auto cursor"
          priority
        />
      </Link>
    {/* Sign in */}
    <div className="flex items-center gap-3">
         <Show when="signed-out">
              <SignInButton mode="modal">
                <Button variant="ghost" className="curor">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="gold">Get Started →</Button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
            {user?.role === "INTERVIEWEE" && (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/explore">
                    <Users size={16} />
                    <span className="hidden md:inline">Explore</span>
                  </Link>
                </Button>
                <Button variant="default" asChild>
                  <Link href="/appointments">
                    <CalendarDays size={16} />
                    <span className="hidden md:inline">My Appointments</span>
                  </Link>
                </Button>
               </>
            )}

            {user?.role === "INTERVIEWEE" && (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/explore">
                    <Users size={16} />
                    <span className="hidden md:inline">Explore</span>
                  </Link>
                </Button>
                <Button variant="default" asChild>
                  <Link href="/appointments">
                    <CalendarDays size={16} />
                    <span className="hidden md:inline">My Appointments</span>
                  </Link>
                </Button>
              </>
            )}


              {/* credit */}
              <UserButton />
            </Show>
    </div>
   </nav>

  )
}
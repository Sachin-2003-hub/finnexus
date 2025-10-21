import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard, Menu } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/70 backdrop-blur-md z-50 border-b dark:border-b-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Welth Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <ThemeToggle />
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>

        {/* Mobile: separated hamburger and profile */}
        <div className="md:hidden flex items-center gap-3">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              {/* 2-line hamburger button */}
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="flex items-center justify-center"
              >
                <span className="sr-only">Open menu</span>
                <span aria-hidden className="block w-5 h-5 relative">
                  <span className="absolute left-0 top-1/4 block h-0.5 w-full bg-current rounded" />
                  <span className="absolute left-0 bottom-1/4 block h-0.5 w-full bg-current rounded" />
                </span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="p-4">
              <DrawerHeader className="items-start">
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col gap-3 p-4 pt-0">
                <SignedOut>
                  <a href="#features" className="text-gray-600 dark:text-gray-300">Features</a>
                  <a href="#testimonials" className="text-gray-600 dark:text-gray-300">Testimonials</a>
                  <SignInButton forceRedirectUrl="/dashboard">
                    <Button variant="outline" className="w-full">Login</Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard">
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <LayoutDashboard size={18} /> Dashboard
                    </Button>
                  </Link>
                  <a href="/transaction/create">
                    <Button className="w-full flex items-center gap-2">
                      <PenBox size={18} /> Add Transaction
                    </Button>
                  </a>
                </SignedIn>
                <div className="pt-2">
                  <ThemeToggle />
                </div>
                <SignedIn>
                  <div className="pt-2">
                    <UserButton
                      appearance={{
                        elements: { avatarBox: "w-10 h-10" },
                      }}
                    />
                  </div>
                </SignedIn>
              </div>
            </DrawerContent>
          </Drawer>

          {/* Keep profile separate visually on mobile (outside the drawer trigger) */}
          <div className="flex items-center">
            <SignedIn>
              <UserButton
                appearance={{
                  elements: { avatarBox: "w-10 h-10" },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
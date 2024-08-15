"use client";

import { useQuery } from "convex/react";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUp,
  SignUpButton,
} from "@clerk/clerk-react";
import { api } from "@/convex/_generated/api";
import { useStoreUserEffect } from "@/components/providers/auth-status";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UserSkeleton = () => (
  <TableRow className="hover:bg-accent transition-colors">
    <TableCell className="p-4 bg-card text-card-foreground">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-5 w-32" />
      </div>
    </TableCell>
    <TableCell className="p-4 bg-card text-muted-foreground">
      <Skeleton className="h-5 w-48" />
    </TableCell>
    <TableCell className="p-4 bg-card text-muted-foreground">
      <Skeleton className="h-5 w-20" />
    </TableCell>
    <TableCell className="p-4 bg-card text-muted-foreground">
      <Skeleton className="h-5 w-32" />
    </TableCell>
  </TableRow>
);

const AdminLogout = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear the local storage
    localStorage.removeItem("accessKey");
    localStorage.removeItem("adminEmail");
  }, []);

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">You have been logged out.</h1>
      <Button
        onClick={handleRedirect}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Go to Home Page
      </Button>
    </div>
  );
};

const UserList = () => {
  const totalUsers = useQuery(api.users.getAll);

  return (
    <div>
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          <SignedOut>
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <Button
              asChild
              variant="outline"
              size="default"
              className="bg-red-600 text-white hover:bg-red-700"
            >
              <SignOutButton />
            </Button>
          </SignedIn>
        </div>

        {/* User Table */}
        <Table className="w-full shadow-lg rounded-lg overflow-hidden">
          <TableCaption className="text-lg font-semibold text-secondary-foreground bg-secondary p-4">
            A list of all registered users.
          </TableCaption>
          <TableFooter>
            <TableRow>
              <TableCell
                colSpan={3}
                className="p-4 text-secondary-foreground font-semibold bg-secondary"
              >
                Total Users
              </TableCell>
              <TableCell className="p-4 text-right text-primary font-bold bg-secondary">
                {totalUsers?.length || <Skeleton className="h-5 w-12" />}
              </TableCell>
            </TableRow>
          </TableFooter>
          <TableHeader>
            <TableRow className="">
              <TableHead className="p-4 bg-secondary text-secondary-foreground">
                User Info
              </TableHead>
              <TableHead className="p-4 bg-secondary text-secondary-foreground">
                Email
              </TableHead>
              <TableHead className="p-4 bg-secondary text-secondary-foreground">
                Role
              </TableHead>
              <TableHead className="p-4 bg-secondary text-secondary-foreground">
                Created At
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {totalUsers
              ? totalUsers.map((user) => (
                  <TableRow
                    key={user._id}
                    className="hover:bg-accent transition-colors"
                  >
                    <TableCell className="p-4 bg-card text-card-foreground">
                      <div className="flex items-center space-x-4">
                        <img
                          src={user.image}
                          alt={user.name}
                          className="h-12 w-12 object-cover rounded-full border-2 border-primary"
                        />
                        <div className="font-medium text-card-foreground">
                          {user.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="p-4 bg-card text-muted-foreground">
                      {user.email}
                      {user.lastSignIn}
                    </TableCell>
                    <TableCell className="p-4 bg-card text-muted-foreground">
                      {user.isAdmin ? "Admin" : "User"}
                    </TableCell>
                    <TableCell className="p-4 bg-card text-muted-foreground">
                      {new Date(user._creationTime).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))
              : Array.from({ length: 5 }).map((_, index) => (
                  <UserSkeleton key={index} />
                ))}
          </TableBody>
        </Table>
      </section>

      {/* Admin Logout */}
      <AdminLogout />
    </div>
  );
};

export default UserList;

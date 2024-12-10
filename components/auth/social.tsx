"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
export const Social = () => {
    const onClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        });
    }
    return (
        <div
            className="flex items-center w-full gap-x-2"
        >
            <Button
                size={"lg"}
                className="w-full"
                variant={"outline"}
                onClick={() => onClick("google")}
            >
                <FcGoogle className="h-10 w-10" />
                <p className="w-full font-light text-lg">Continue with Google</p>
            </Button>
        </div>
    )
}
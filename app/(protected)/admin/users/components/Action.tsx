"use client";

import { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { toast } from "sonner";
import { User, UserRole } from "@prisma/client"; // Adjust the import path as needed
import getCurrentUser from "@/app/actions/getCurrentUser";

interface UserActionsProps {
    user: User;
}

const updateUserRole = async (userId: string, role: UserRole) => {
    const data = { role };
    await axios.patch(`/api/role/${userId}`, data)
        .then(() => {
            toast.success(`Role updated to ${role}`);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
        .catch(() => {
            toast.error("Couldn't update the user!");
        });
};

const UserActions: React.FC<UserActionsProps> = ({ user }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const person = await getCurrentUser();
            console.log("Fetched Current User:", person);
            if (person) {
                // Convert date strings to Date objects
                const parsedPerson: User = {
                    ...person,
                    createdAt: new Date(person.createdAt),
                    updatedAt: new Date(person.updatedAt),
                    emailVerified: person.emailVerified ? new Date(person.emailVerified) : null,
                };
                setCurrentUser(parsedPerson);
            } else {
                console.log("No current user found");
            }
        };

        fetchCurrentUser();
    }, []);

    useEffect(() => {
        if (currentUser) {
            console.log(currentUser.role, "Current user role");
        }
    }, [currentUser]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    disabled={currentUser?.role === UserRole.ADMIN}
                    onClick={() => updateUserRole(user.id, UserRole.ADMIN)}
                >
                    Make Admin
                </DropdownMenuItem>
                <DropdownMenuItem
                    disabled={currentUser?.role !== UserRole.ADMIN}
                    onClick={() => updateUserRole(user.id, UserRole.USER)}
                >
                    Make User
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserActions;

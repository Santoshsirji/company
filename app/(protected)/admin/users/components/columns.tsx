"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@prisma/client";
import UserActions from "./Action";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "image",
        header: "Avatar",
        cell: ({ row }) => {
            const value = row.getValue<string>("image");
            return (
                <div>
                    <Image src={value || "/next.svg"} width={100} height={100} className="h-8 w-8 rounded-full" alt="Avatar" />
                </div>
            );
        },
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => <UserActions user={row.original} />,
    },
];

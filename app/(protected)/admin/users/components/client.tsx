"use client";

import { User } from "@prisma/client";

import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import Container from "@/components/container";

interface UserClientProps {
    data: User[]
}
const UserClient = ({
    data
}: UserClientProps) => {
    return ( 
        <div className="">
            <Container>
                <DataTable columns={columns} data={data}/>
            </Container>
        </div>
     );
}
 
export default UserClient;
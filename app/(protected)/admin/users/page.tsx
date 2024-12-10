import { DataTable } from "@/components/ui/data-table";
import { db } from "@/lib/db";
import UserClient from "./components/client";

const UserPage = async () => {
    const user = await db.user.findMany({
        where: {

        }
    })

    return ( 
        <div
        className="
        flex
        flex-col
        w-full
        "
        >
            <UserClient data={user}/>
        </div>
     );
}
 
export default UserPage;
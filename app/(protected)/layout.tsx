import { redirect } from "next/navigation";
import getCurrentUser from "../actions/getCurrentUser";

const ProtectedLayout = async ({children}: { children: React.ReactNode}) => {
    const user = await getCurrentUser();

    if(!user || typeof user === null) {
      redirect('/auth/login');
    }
    return ( 
        <div
        className="
        w-full
        h-full
        bg-[#e6e5f817]
        "
        >
            {children}
        </div>
     );
}
 
export default ProtectedLayout;
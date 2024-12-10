import getCurrentUser from "@/app/actions/getCurrentUser";
import Navigation from "./components/Navigation";

const AdminPageLayout = async ({children}: { children: React.ReactNode}) => {
    const user = await getCurrentUser();
    return ( 
        <div 
            className="
            min-h-[90vh]
            ">
                <Navigation image={user?.image}/>
                <div 
                    className="
                    pt-16
                    ">
                        {children}
                </div>
        </div>
     );
}
 
export default AdminPageLayout;
import { redirect } from "next/navigation";
import getCurrentUser from "../actions/getCurrentUser";

const AuthLayout = async ({children} : { children: React.ReactNode}) => {
    const user = await getCurrentUser();
    if(!user || user === null) {

        return ( 
            <div>
            {children}
        </div>
     );
    }
    else {
        redirect('/admin');
    }
}
 
export default AuthLayout;

import { FcGoogle } from "react-icons/fc";


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn } from "@/auth";
import { useEffect } from "react";
import getCurrentUser from "@/app/actions/getCurrentUser";
import {Social} from "@/components/auth/social";


const AdminLoginPage = () => {
    const handleClick = () => {

    }
   
    return ( 
        <div
        className="
        flex
        flex-col
        items-center
        justify-center
        h-screen
        "
        >
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Please Login to Continue</CardDescription>
                </CardHeader>
                <CardContent>
                    <Social />
                </CardContent>
            </Card>
        </div>
     );
}
 
export default AdminLoginPage;
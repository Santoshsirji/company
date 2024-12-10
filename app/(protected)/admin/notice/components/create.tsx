"use client";

import { useRouter } from "next/navigation";
import { MdCreate } from "react-icons/md";

const Create = () => {
    const router = useRouter();
    return ( 
        <div className="
                bg-slate-100
                p-4
                border
                rounded-xl
                cursor-pointer
                hover:bg-slate-200
                duration-100
                flex 
                items-center
                gap-4
                "
            onClick={() => router.push(`/admin/notice/new`)}
        >
            <MdCreate className="w-8 h-8 cursor-pointer no-select" />
            <span className="text-2xl cursor-pointer no-select">Create a Notice</span>
        </div>
     );
}
 
export default Create;
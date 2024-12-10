"use client";


import * as z from "zod"
import axios from "axios"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Trash } from "lucide-react"
import { Contact } from "@prisma/client"
import { useParams, useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import Heading from "@/components/style/heading";
import { AlertModal } from "@/components/modals/alert-modal"
import RichTextEditor from "@/components/TextEditor";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(1),
    email: z.string().min(1),
    phone: z.string().min(1),
    subject: z.string().min(1),
    description: z.string().min(1),
})

type BlogFormValues = z.infer<typeof formSchema>

interface BlogFormProps {
    initialData:  null
}

const MyForm: React.FC<BlogFormProps> = ({
     initialData 
}) => {
    
    const params = useParams();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? "Contact Us" : "Contact US";
    const description = initialData ? "Edit an Blog" : "Add a new Blog";

    const toastMessage = initialData ? "Request Sent" : "Request Sent";
    const action = initialData ? "Save Changes" : "Get a free Quote"

    const form = useForm<BlogFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            name : "",
            email: "",
            phone: "",
            subject: "",
            description: "",
        }
    })


    const onSubmit = async (data: BlogFormValues) => {
        try {
            setLoading(true); 
            if(initialData) {
                await axios.patch(`/api/contact`, data);

            } else {
                await axios.post(`/api/contact`, data);
            }
            router.refresh();
            toast.success(toastMessage);
            router.refresh();
        }
        catch (error: any) {
            toast.error("Something went wrong");
        }
        finally {
            setLoading(false);
        }
    }

    // const onDelete = async () => {
    //     try {
    //         setLoading(true);
    //         await axios.delete(`/api/blogs/${params.blogId}`);
    //         router.refresh();
    //         router.push(`/admin/blogs`);
    //         router.refresh();
    //         toast.success("Blog deleted.");
    //     } catch (error: any) {
    //         toast.error("Some thing went wrong!");
    //     } finally {
    //         setLoading(false);
    //         setOpen(false);
    //     }
    // }

    return (
        <>     
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg">Name</FormLabel>
                                <FormControl>
                                    <Input className="text-lg" disabled={loading} placeholder="Name" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Phone</FormLabel>
                                    <FormControl>
                                        <Input className="text-lg" disabled={loading} placeholder="Phone" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Email</FormLabel>
                                    <FormControl>
                                        <Input className="text-lg" disabled={loading} placeholder="Email" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg">Subject</FormLabel>
                                <FormControl>
                                    <Input className="text-lg" disabled={loading} placeholder="Subject" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="gap-8 flex flex-col">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">How can we help</FormLabel>
                                    <FormControl>
                                        <Textarea className="text-lg" disabled={loading} placeholder="Tell us how can we help you." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* <FormField
                            control={form.control}
                            name="backparagraph"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Detailed Description</FormLabel>
                                    <FormControl>

                                    <RichTextEditor
                                        value={field.value}
                                        onChange={field.onChange}
                                        config={{ readonly: false }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            rules={{ required: "Detailed Description is required" }}
                        /> */}
                    </div>
                    <Button disabled={loading} className="ml-auto" type="submit">
                        {action}
                    </Button>
                </form>
            </Form>               
        </>
    );
};

export default MyForm;

"use client";


import * as z from "zod"
import axios from "axios"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Trash } from "lucide-react"
import { Collaboration } from "@prisma/client"
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
    title: z.string().min(1),
    front: z.string().min(1),
    backparagraph: z.string().min(1),
})

type CollaborationFormValues = z.infer<typeof formSchema>

interface CollaborationFormProps {
    initialData: Collaboration | null;
}

const MyForm: React.FC<CollaborationFormProps> = ({
     initialData 
}) => {
    
    const params = useParams();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? "Edit Collaboration" : "Create an Collaboration";
    const description = initialData ? "Edit an Collaboration" : "Add a new Collaboration";

    const toastMessage = initialData ? "Collaboration Updated" : "Collaboration Created";
    const action = initialData ? "Save Changes" : "Create"

    const form = useForm<CollaborationFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            title: "",
            front: "",
            backparagraph: ""
        }
    })


    const onSubmit = async (data: CollaborationFormValues) => {
        try {
            setLoading(true); 
            if(initialData) {
                await axios.patch(`/api/collaboration/${params.collaborationId}`, data);

            } else {
                await axios.post(`/api/collaboration`, data);
            }
            router.refresh();
            router.push(`/admin/collaboration`);
            router.refresh();
            toast.success(toastMessage);
        }
        catch (error: any) {
            toast.error("Something went wrong");
        }
        finally {
            setLoading(false);
        }
    }

    const onDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/collaboration/${params.collaborationId}`);
            router.refresh();
            router.push(`/admin/collaboration`);
            router.refresh();
            toast.success("Collaboration deleted.");
        } catch (error: any) {
            toast.error("Some thing went wrong!");
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }

    return (
        <>     <AlertModal
            isOpen={open}
            onClose={() => setOpen(false)}
            onConfirm={onDelete}
            loading={loading}
        />
            <div className="flex items-center justify-between">
                <Heading title={title} subtitle={description} />
                {initialData && (
                    <Button
                        disabled={loading}
                        variant="destructive"
                        size="sm"
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                )}
            </div>
            <Separator />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} placeholder="Title" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="gap-8 flex flex-col">
                        <FormField
                            control={form.control}
                            name="front"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Featured Paragraph</FormLabel>
                                    <FormControl>
                                        <Textarea disabled={loading} placeholder="Featured Paragraph" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="backparagraph"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Detailed Description</FormLabel>
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
                        />
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

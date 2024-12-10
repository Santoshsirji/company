import { db } from "@/lib/db";

export default async function Contact() {
    const contacts = await db.contact.findMany({
        where: {

        }
    })

    return (
        <div
            className="
        container
        flex
        w-full
        flex-col
        "
        >
            <div
                className="
        flex
        text-semibold
        w-full
        bg-slate-100
        border-b
        "
            >
                <div
                    className="w-1/5"
                >
                    Name
                </div>
                <div
                    className="w-1/5"
                >
                    Phone
                </div>
                <div
                    className="w-1/5"
                >
                    Email
                </div>
                <div
                    className="w-1/5"
                >
                    Subject
                </div>
                <div
                    className="w-1/5"
                >
                    Description
                </div>
            </div>
         
          {contacts?.map((contact, index) => (
            <div
            key={index}
            id="index"
            className="
            flex
            text-semibold
            w-full
            bg-cyan-100
            border-b
            "
        >
            <div
                className="w-1/5"
            >
                {contact.name}
            </div>
            <div
                className="w-1/5"
            >
                {contact.phone}
            </div>
            <div
                className="w-1/5"
            >
                {contact.email}
            </div>
            <div
                className="w-1/5"
            >
                {contact.subject}
            </div>
            <div
                className="w-1/5
                h-max
                py-1
                "
            >
                {contact.description}
            </div>
        </div>
          ))}
        </div>
    )
}
import { TriangleAlert } from "lucide-react";


import Heading from "@/components/style/heading";
import { Separator } from "@/components/ui/separator";
import getAllvacancys from "../actions/getVacancys";
import Blog from "./components/Blog";

const vacancyPage = async () => {

    const vacancys = await getAllvacancys();

    return (
        <div
            className="
        w-full
        bg-slate-50
        min-h-[90vh]
        "
        >
            <div className="px-2 md:px-6 lg:px-10">
                <Heading
                    title="Vacancys"
                    subtitle="We are hiring for the following posts."
                />
                <Separator className="mt-7 mb-3" />
            </div>
            <div
                className="
            flex
            flex-col
            items-center
            justify-center
            gap-8
            "
            >
                {vacancys.map((vacancy, index) => (
                    <Blog
                        key={index}
                        id={vacancy.id}
                        title={vacancy.title}
                        paragraph={vacancy.front}
                    />
                ))}
                <div
                    className="
                font-semibold
                flex
                items-center 
                space-x-1
                text-muted-foreground
                ">
                    <TriangleAlert />
                    <span className="text-lg ">
                        End of Results.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default vacancyPage;
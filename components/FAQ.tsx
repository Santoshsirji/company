"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


const FrequentlyAskedQuestions = () => {
    const questions = [
        {
            question: "What should I do if I can't find suitable products?",
            answer: `If you cannot find suitable product, you can directly contact us and enquire if we provie the product.`
        },
        {
            question: "Does Sujata Technical Services Provide customization?",
            answer: `Yes. We provide customization.`
        },
        {
            question: "Where is the office located?",
            answer: `The office of Sujata Technical Services is located in Kalimati, Kathmandu, Nepal.`
        },
        {
            question: "Why should we trust Sujat Technical Services?",
            answer: `We are in the business of making elevators, and escalators from the past 13 years. We've worked with lots of big brands and have successfully been able to satisfy their needs. Infact, we place customer satisfaction over all. Therefore, you should trust Sujata Technical Services.`
        },
        {
            question: "Where is the manufacturer company located?",
            answer: `The manufacturer company is located in India.`
        },
    ]
    return (
        <div 
            className="
            py-20
            w-full 
            flex 
            flex-col 
            items-center 
            justify-center">
                <Accordion 
                    type="single" 
                    collapsible 
                    className="w-full"
                    >
                    {questions.map((question, index) => (
                        <AccordionItem 
                            value={question.question} 
                            key={index}>
                                <AccordionTrigger 
                                    className="
                                    hover:no-underline 
                                    px-2
                                    lg:text-xl
                                    md:text-lg
                                    text-base
                                    ">
                                    {question.question}
                                </AccordionTrigger>
                                <AccordionContent className="lg:text-xl
                                md:text-lg
                                text-base
                                ">
                                     {question.answer}
                                </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
        </div>
    );
}

export default FrequentlyAskedQuestions;
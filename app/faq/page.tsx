"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


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
        <div className="lg:container">
            <Card>
                <CardHeader>
                    <CardTitle>FAQs</CardTitle>
                    <CardDescription>Following are the most frequently asked questions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {questions.map((question, index) => (
                            <AccordionItem value={question.question} key={index}>
                                <AccordionTrigger className="hover:no-underline hover:bg-gradient-to-r from-slate-50 via-neutral-50 to-slate-50 px-2">{question.question}</AccordionTrigger>
                                <AccordionContent>
                                    {question.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}

                    </Accordion>
                </CardContent>
            </Card>
        </div>
    );
}

export default FrequentlyAskedQuestions;
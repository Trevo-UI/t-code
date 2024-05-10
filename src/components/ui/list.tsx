import { Link } from "react-router-dom";
import getDevice from '@/functions/getDevice';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface ListProps {
    title: string;
    itemsList: any;
}

interface item {
    link: string;
    description: string;
}

function List(
    {
        title,
        itemsList,
    }: ListProps
) {
    const isMobile = getDevice();

    return (
        <>
            { !isMobile ? (
                <>
                    <h3 className="text-xl uppercase font-bold mb-2 md:mb-0">
                        { title }
                    </h3>
                    <ul className="flex flex-col gap-1 mb-8 md:mb-0">
                        {itemsList.map((item: item, i: number) => (
                            <li className="hover:underline" key={i}>
                                <Link to={item.link} title={item.description ? item.description : 'item da lista'}>
                                    { item.description }
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item">
                        <AccordionTrigger>
                            <p className="text-lg">
                                { title }
                            </p>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="flex flex-col gap-2">
                            {itemsList.map((item: item, i: number) => (
                                <li className="text-md" key={i}>
                                    <Link to={item.link} title={item.description ? item.description : 'item'}>
                                        {item.description}
                                    </Link>
                                </li>
                            ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}
        </>
    )
}

export default List;
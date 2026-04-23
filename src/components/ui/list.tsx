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
                    <h3 className="text-left text-base font-bold uppercase tracking-wide text-white">
                        { title }
                    </h3>
                    <ul className="mb-0 mt-3 flex flex-col gap-2.5 text-left text-sm sm:text-base">
                        {itemsList.map((item: item, i: number) => (
                            <li className="text-base leading-normal" key={i}>
                                {item.link.startsWith('http') ? (
                                    <a
                                        className="text-white/95 decoration-white/40 hover:underline hover:decoration-white"
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={item.description ? item.description : 'item da lista'}
                                    >
                                        {item.description}
                                    </a>
                                ) : (
                                    <Link
                                        className="text-white/95 decoration-white/40 hover:underline hover:decoration-white"
                                        to={item.link}
                                        title={item.description ? item.description : 'item da lista'}
                                    >
                                        {item.description}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <Accordion type="single" collapsible className="w-full text-left">
                    <AccordionItem value="item" className="border-white/20">
                        <AccordionTrigger className="text-left text-base font-bold uppercase tracking-wide text-white">
                            { title }
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="flex flex-col gap-2.5 text-sm leading-normal text-white/95 sm:text-base">
                            {itemsList.map((item: item, i: number) => (
                                <li key={i}>
                                    {item.link.startsWith('http') ? (
                                        <a
                                            className="text-white/95 decoration-white/40 hover:underline hover:decoration-white"
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={item.description ? item.description : 'item'}
                                        >
                                            {item.description}
                                        </a>
                                    ) : (
                                        <Link
                                            className="text-white/95 decoration-white/40 hover:underline hover:decoration-white"
                                            to={item.link}
                                            title={item.description ? item.description : 'item'}
                                        >
                                            {item.description}
                                        </Link>
                                    )}
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
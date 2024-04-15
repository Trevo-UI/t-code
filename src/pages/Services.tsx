import collectionItem from '@/components/ui/collectionItem.tsx';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function Services() {
    const collectionProps = [
        {
            title: "Projetos",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
            imageMain: "https://via.placeholder.com/1000",
            imageSecondary: "https://via.placeholder.com/1000"
        },
        {
            title: "Consultoria",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
            imageMain: "https://via.placeholder.com/1000",
            imageSecondary: "https://via.placeholder.com/1000"
        },
        {
            title: "Sistemas Personalizados",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
            imageMain: "https://via.placeholder.com/1000",
            imageSecondary: "https://via.placeholder.com/1000"
        }
    ];

    return (
        <section className="flex flex-col items-center justify-center gap-8 w-full h-screen bg-gray-50">
            <h3 className="flex flex-col text-3xl font-bold text-center text-gray-800">
                Nossos Serviços
                <span className="w-full border-b-2 border-blue-800"></span>
            </h3>
            <div className="w-4/5 mx-auto my-0">
                <Carousel className="w-full max-w-xs md:max-w-3xl mx-auto my-0">
                    <CarouselContent>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index} className="rounded-sm">
                                {collectionItem(collectionProps[index % collectionProps.length])}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-10%]"/>
                    <CarouselNext className="right-[-10%]"/>
                </Carousel>
            </div>
        </section>
    )
}

export default Services;
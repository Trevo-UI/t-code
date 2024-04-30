import { RiStarSFill } from "react-icons/ri";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

function Reviews() {
    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false, loop: true })
    )

    return (
        <>
            <h3 className="text-2xl font-bold text-center mb-5 underline-offset-8 underline">
                Avaliações
            </h3>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    <CarouselItem className="flex flex-col items-center justify-center">
                        <p className="mb-4">
                            "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
                            lorem"
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1">
                                <span className="flex items-center justify-center">
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                </span>
                                <p>
                                    - Empresa X
                                </p>
                            </div>
                            <p>
                                12/04/2024
                            </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col items-center justify-center">
                        <p className="mb-4">
                            "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
                            lorem"
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1">
                                <span className="flex items-center justify-center">
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                </span>
                                <p>
                                    - Empresa Y
                                </p>
                            </div>
                            <p>
                                01/03/2024
                            </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col items-center justify-center">
                        <p className="mb-4">
                            "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
                            lorem"
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1">
                                <span className="flex items-center justify-center">
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                    <RiStarSFill className="text-yellow-500"/>
                                </span>
                                <p>
                                    - Empresa Z
                                </p>
                            </div>
                            <p>
                                09/02/2024
                            </p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute top-50 left-50 text-black md:top-0 md:left-10"/>
                <CarouselNext className="absolute top-50 right-0 text-black md:top-0 md:right-10"/>
            </Carousel>
        </>
    )
}

export default Reviews;
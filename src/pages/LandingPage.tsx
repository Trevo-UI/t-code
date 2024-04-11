import { useRef } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


function LandingPage() {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <>
            <section className="flex items-center w-full h-96 bg-gray-400">
                <div className="flex flex-col gap-4 w-4/5 mx-auto my-0">
                    <h2 className="text-4xl font-bold text-white">
                        T-Code Soluções
                    </h2>
                    <p className="text-xl text-white w-80">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </section>
            <section className="flex justify-center items-center gap-1 w-full h-96">
                <div className="flex items-center flex-col text-center gap-4 w-1/3 mx-auto my-0">
                    <h2 className="text-md font-bold text-black h-12 md:text-3xl">
                        Projetos
                    </h2>
                    <p className="text-xs text-black w-full md:text-xl">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                </div>
                <div className="flex items-center flex-col text-center gap-4 w-1/3 mx-auto my-0">
                    <h2 className="text-md font-bold text-black h-12 md:text-3xl">
                        Sistemas Personalizados
                    </h2>
                    <p className="text-xs text-black w-full md:text-xl">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                </div>
                <div className="flex items-center flex-col text-center gap-4 w-1/3 mx-auto my-0">
                    <h2 className="text-md font-bold text-black h-12 md:text-3xl">
                        Consultoria
                    </h2>
                    <p className="text-xs text-black w-full md:text-xl">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                </div>
            </section>
            <section className="flex flex-col justify-center gap-5 w-full h-fit p-5">
                <h3 className="text-2xl font-bold text-center">
                    Avaliações
                </h3>
                <Carousel plugins={[plugin.current]} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
                    <CarouselContent>
                        <CarouselItem className="flex flex-col items-center justify-center gap-4">
                            {/*<img src="https://via.placeholder.com/150" alt="Imagem 1"/>*/}
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, lorem
                            </p>
                            <p>
                                Empresa X - Lorem ipsum
                            </p>
                        </CarouselItem>
                        <CarouselItem className="flex flex-col items-center justify-center gap-4">
                            {/*<img src="https://via.placeholder.com/150" alt="Imagem 1"/>*/}
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, lorem
                            </p>
                            <p>
                                Empresa Y - Lorem ipsum
                            </p>
                        </CarouselItem>
                        <CarouselItem className="flex flex-col items-center justify-center gap-4">
                            {/*<img src="https://via.placeholder.com/150" alt="Imagem 1"/>*/}
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, lorem
                            </p>
                            <p>
                                Empresa Z - Lorem ipsum
                            </p>
                        </CarouselItem>
                    </CarouselContent>
                    {/*<CarouselPrevious />*/}
                    {/*<CarouselNext />*/}
                </Carousel>
            </section>
        </>
    );
}

export default LandingPage;
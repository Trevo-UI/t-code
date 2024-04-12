import { useRef } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { FaProjectDiagram } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GrSystem } from "react-icons/gr";
import Autoplay from "embla-carousel-autoplay";
import Card from '@/components/ui/card';

function LandingPage() {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <>
            <section className="flex items-center w-full h-96 bg-[url('https://via.placeholder.com/1000')] bg-center">
                <div className="flex flex-col gap-4 w-4/5 mx-auto my-0">
                    <h2 className="text-3xl font-bold text-white">
                        T-Code Soluções
                    </h2>
                    <p className="text-lg text-white w-80">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </section>
            <section className="flex justify-center items-center gap-4 py-4 w-full h-fit bg-gray-100 md:h-96">
                <Card title="Projetos" className="variant-yellow">
                    <FaProjectDiagram className="w-6 h-6 md:w-16 md:h-16"/>
                </Card>
                <Card title="Consultoria" className="variant-blue">
                    <AiOutlineFundProjectionScreen className="w-6 h-6 md:w-16 md:h-16"/>
                </Card>
                <Card title="Sistemas Personalizados" className="variant-gray">
                    <GrSystem className="w-6 h-6 md:w-16 md:h-16"/>
                </Card>
            </section>
            <section className="flex flex-col justify-center gap-5 w-full h-fit p-5">
                <h3 className="text-2xl font-bold text-center">
                    Avaliações
                </h3>
                <Carousel plugins={[plugin.current]} onMouseEnter={plugin.current.stop}
                          onMouseLeave={plugin.current.reset}>
                    <CarouselContent>
                        <CarouselItem className="flex flex-col items-center justify-center gap-4">
                            {/*<img src="https://via.placeholder.com/150" alt="Imagem 1"/>*/}
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
                                lorem
                            </p>
                            <p>
                                Empresa X - Lorem ipsum
                            </p>
                        </CarouselItem>
                        <CarouselItem className="flex flex-col items-center justify-center gap-4">
                            {/*<img src="https://via.placeholder.com/150" alt="Imagem 1"/>*/}
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
                                lorem
                            </p>
                            <p>
                                Empresa Y - Lorem ipsum
                            </p>
                        </CarouselItem>
                        <CarouselItem className="flex flex-col items-center justify-center gap-4">
                            {/*<img src="https://via.placeholder.com/150" alt="Imagem 1"/>*/}
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
                                lorem
                            </p>
                            <p>
                                Empresa Z - Lorem ipsum
                            </p>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-50 left-50 md:top-0 md:left-10"/>
                    <CarouselNext className="absolute top-50 right-0 md:top-0 md:right-10"/>
                </Carousel>
            </section>
        </>
    );
}

export default LandingPage;
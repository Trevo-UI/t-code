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
            <h3 className="text-2xl md:3xl lg:text-4xl font-bold text-center mb-5">
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
                        <p className="mb-4 text-md max-w-4xl">
                            "T-Code é simplesmente fenomenal! Desde o primeiro contato até a entrega final, sua equipe mostrou um profissionalismo exemplar. As soluções tecnológicas fornecidas foram além das nossas expectativas, impulsionando nossa empresa para o futuro digital. O suporte técnico é ágil e eficaz, garantindo que qualquer problema seja resolvido rapidamente. Recomendo entusiasticamente T-Code a qualquer empresa que busque excelência em tecnologia."
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
                        <p className="mb-4 text-md max-w-4xl">
                            "A experiência com T-Code foi absolutamente excepcional! Suas soluções tecnológicas foram perfeitamente adaptadas às nossas necessidades específicas, proporcionando uma melhoria significativa em nossos processos e eficiência operacional. Além disso, a equipe da T-Code demonstrou um compromisso notável com o sucesso do cliente, oferecendo suporte contínuo e personalizado. Não poderíamos estar mais satisfeitos com os resultados obtidos."
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
                        <p className="mb-4 text-md max-w-4xl">
                            "T-Code é simplesmente imbatível! Desde o início do nosso projeto até a sua conclusão, fomos impressionados com a qualidade e a inovação das soluções tecnológicas oferecidas. A equipe da T-Code mostrou um alto nível de expertise e profissionalismo em todos os aspectos do serviço prestado. Mesmo após a implementação, o suporte técnico continuou sendo excepcional, garantindo que nossa operação continuasse funcionando sem problemas. Recomendamos T-Code sem hesitação a qualquer empresa em busca de soluções tecnológicas de ponta."
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
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from '@/components/ui/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Rate } from 'antd';
import { reviews } from '@/data/reviews';

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
                    {reviews.map((review, i: number)=> (
                        <CarouselItem className="flex flex-col items-center justify-center" key={i}>
                            <p className="mb-4 text-md max-w-4xl">
                                "{ review.description }"
                            </p>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-1">
                                    <span className="flex items-center justify-center">
                                        <Rate allowHalf disabled defaultValue={0} value={review.stars}/>
                                    </span>
                                    <p>
                                       - Ótimo
                                    </p>
                                </div>
                                <p>
                                    { review.date + ' - ' +  review.business }
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-50 left-50 text-black md:top-0 md:left-10"/>
                <CarouselNext className="absolute top-50 right-0 text-black md:top-0 md:right-10"/>
            </Carousel>
        </>
    )
}

export default Reviews;
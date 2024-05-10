import { policyAndPrivacy } from '@/data/policyAndPrivacy.tsx';

function PolicyAndPrivacy() {
    return (
        <section className="h-full md:h-screen relative z-[1] py-8 lg:py-12">
            <div className="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-lg md:max-w-3xl lg:max-w-5xl">
                <div className="mb-8 animate__zoomIn duration-1000">
                    <h1 className="text-4xl text-center">Política de Privacidade</h1>
                </div>
                <ol className="text-points grid grid-cols-12 gap-y-8 lg:gap-12">
                    {policyAndPrivacy.map((item, index: number) => (
                        <li className="text-points__item col-span-12 lg:col-span-6 animate__slideInUp duration-1000" key={index}>
                            <div className="text-points__text">
                                <h4 className="text-xl mb-1">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default PolicyAndPrivacy;
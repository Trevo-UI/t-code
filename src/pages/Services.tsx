import { services } from '@/data/services';

function Services() {
    return (
        <section className="w-full scroll-smooth">
            <div className="mx-auto w-full max-w-screen-2xl px-4 pt-28 pb-8 sm:px-6 sm:pt-32 sm:pb-12 lg:px-10">
                <h1 className="text-page-title">Serviços</h1>
                <p className="text-page-lead mt-4 w-full text-justify sm:mt-6 sm:max-w-3xl">
                    Do desenvolvimento à operação em produção.
                </p>
            </div>

            {services.map((service, i) => {
                const titleOnRight = i % 2 === 1;

                return (
                    <div
                        key={service.id}
                        className="border-t border-gray-200/80 first:border-t-0"
                    >
                        <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
                            <div className="grid grid-cols-1 items-start gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10 xl:gap-x-20">
                                <div
                                    className={
                                        titleOnRight
                                            ? 'lg:order-2 lg:pl-2 lg:text-right'
                                            : 'lg:pr-2 lg:text-left'
                                    }
                                >
                                    <h2
                                        className={`text-page-h2 scroll-mt-28 sm:scroll-mt-32 ${
                                            titleOnRight ? 'text-left lg:text-right' : 'text-left'
                                        }`}
                                        id={service.id}
                                    >
                                        {service.title}
                                    </h2>
                                    <p
                                        className={
                                            titleOnRight
                                                ? 'text-page-lead mt-4 w-full max-w-xl text-left sm:mt-5 lg:ml-auto lg:max-w-2xl lg:text-right'
                                                : 'text-page-lead mt-4 w-full max-w-xl text-left sm:mt-5 sm:max-w-2xl'
                                        }
                                    >
                                        {service.subtitle}
                                    </p>
                                </div>
                                <div
                                    className={
                                        titleOnRight
                                            ? 'lg:order-1 lg:pr-2'
                                            : 'lg:pl-0'
                                    }
                                >
                                    <p className="text-page-block">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default Services;

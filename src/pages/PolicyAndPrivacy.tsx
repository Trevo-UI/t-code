import { policyAndPrivacy } from '@/data/policyAndPrivacy.tsx';

function PolicyAndPrivacy() {
    return (
        <section className="relative z-[1] min-h-full bg-gray-100 py-8 pt-24 sm:pt-28 md:min-h-screen lg:py-12">
            <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10">
                <div className="mb-12 text-center sm:mb-14">
                    <h1 className="text-page-title">Política de Privacidade</h1>
                </div>
                <div className="grid w-full grid-cols-1 gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
                    {policyAndPrivacy.map((item, index: number) => (
                        <div className="min-w-0" key={index}>
                            <div>
                                <h2 className="text-page-section mb-3 sm:mb-4">
                                    {item.title}
                                </h2>
                                <p className="text-page-block">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicyAndPrivacy;

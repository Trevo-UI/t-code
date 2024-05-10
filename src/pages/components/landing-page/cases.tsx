import { cases } from '@/data/cases';

function Cases() {
    return (
        <div className="flex flex-col justify-center items-center py-12 lg:py-20">
            <div className="mb-10">
                <h1 className="text-center font-bold text-2xl md:text-3xl">Cases de Sucesso</h1>
                <span className="flex h-1"/>
            </div>

            <div className="flex justify-center items-center w-full gap-4 md:gap-16">
                {cases.map((item, index: number) => (
                    <div className="flex justify-center items-center w-[200px] h-[200px]" key={index}>
                        <figure className="flex justify-center items-center overflow-hidden grayscale w-full h-full bg-gray-400 rounded-md ease-in duration-200 cursor-pointer hover:grayscale-0 hover:scale-110 hover:shadow-lg">
                            <img src={item.image} width={200} height={200} title={item.business} alt="Logo Cases de Sucesso"/>
                        </figure>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cases;
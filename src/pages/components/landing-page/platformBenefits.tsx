import { GrSecure } from "react-icons/gr";
import { TfiDashboard, TfiWallet } from "react-icons/tfi";

function PlatformBenefits() {
    return (
        <div className="w-4/5 px-0 py-8 mx-auto sm:py-12 lg:my-0 lg:px-8 lg:py-16">
            <div className="max-w-xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                    Motivos para escolher nossos serviços
                </h2>
                <p className="mt-4 text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam
                    iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur
                    quibusdam, quos fuga minima.
                </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <div className="flex items-start gap-4">
                    <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                        <GrSecure className="h-5 w-5"/>
                    </span>
                    <div>
                        <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                            possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                        <TfiDashboard className="h-5 w-5"/>
                    </span>
                    <div>
                        <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                            possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                        <TfiWallet className="h-5 w-5"/>
                    </span>
                    <div>
                        <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                            possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlatformBenefits;
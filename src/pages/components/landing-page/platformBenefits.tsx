import { TfiWallet } from "react-icons/tfi";
import { TbMessage2Question } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function PlatformBenefits() {
    return (
        <div className="w-[92%] md:w-5/6 px-0 py-8 mx-auto sm:py-12 lg:my-0 lg:px-8 lg:py-16">
            <div className="w-full mb-16">
                <h2 className="text-center md:text-left text-2xl font-bold md:text-3xl lg:text-4xl">
                    Por que nossa solução é a ideal para você
                </h2>
            </div>
            <div className="flex flex-wrap gap-10">
                <div className="flex items-start gap-4 w-full md:w-[48%]">
                    <span className="shrink-0 rounded-lg bg-blue-900 p-4">
                        <FaRegLightbulb className="h-5 w-5"/>
                    </span>
                    <div>
                        <h2 className="text-lg font-bold">Você tem uma ideia ou está começando um negócio agora?</h2>
                        <p className="mt-1 text-md text-gray-300">
                            Não tem problema, trabalhamos com sistemas personalizados para atender os objetivos da sua
                            empresa, independente do tamanho dela.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end text-start items-start gap-4 w-full md:w-[48%]">
                    <span className="shrink-0 rounded-lg bg-blue-900 p-4">
                        <TfiWallet className="h-5 w-5"/>
                    </span>
                    <div>
                        <h2 className="text-lg font-bold">Esses serviços devem estar fora do meu orçamento</h2>
                        <p className="mt-1 text-md text-gray-300">
                            Será mesmo? Como nossas soluções são personalizadas, os valores também são, podendo se
                            encaixar no seu bolso.
                            E você pode fazer um orçamento sem compromisso nenhum, só para tirar a dúvida.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 w-full md:w-[48%]">
                    <span className="shrink-0 rounded-lg bg-blue-900 p-4">
                        <TbMessage2Question className="h-5 w-5"/>
                    </span>
                    <div>
                        <h2 className="text-lg font-bold"> Meu negócio precisa mesmo de um sistema?</h2>
                        <p className="mt-1 text-md text-gray-300">
                            Sistemas em geral tem o objetivo de ajudar você no dia a dia, tornando sua rotina mais
                            tranquila, segura, ágil e permitindo você focar em coisas mais importantes.
                            Se você quer tornar ela escalável e alcançar mais clientes é indispensável a utilização de
                            um sistema.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end text-start items-start gap-4 w-full md:w-[48%]">
                    <span className="shrink-0 rounded-lg bg-blue-900 p-4">
                        <CgWebsite className="h-5 w-5"/>
                    </span>
                    <div>
                        <h2 className="text-lg font-bold">Será que eu faço um site?</h2>
                        <p className="mt-1 text-md text-gray-300">
                            "Quem não é visto, não é lembrado”, desde a criação do Google todo mundo utiliza ele como mecanismo de busca para encontrar aquela empresa referência no mercado e ver as opiniões dos clientes ou aquele estabelecimento comercial para ver onde está localizado.
                            Por isso seu negócio precisa de um site, estar no digital é uma obrigação.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlatformBenefits;
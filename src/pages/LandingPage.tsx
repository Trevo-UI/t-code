import { FaProjectDiagram } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import Card from '@/components/ui/card';
import PlatformBenefits from '@/pages/components/landing-page/platformBenefits';
import Reviews from '@/pages/components/landing-page/reviews';

function LandingPage() {
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
            <section className="flex flex-col justify-center items-center gap-4 my-5 py-4 w-full h-fit bg-blue-900 md:h-fit">
                <h3 className="underline-offset-8 underline text-2xl font-bold my-5 text-white">
                     Serviços
                </h3>
                <div className="flex justify-center items-center gap-4 w-full mb-5">
                    <Card title="Projetos" className="variant-yellow">
                        <FaProjectDiagram className="w-6 h-6 md:w-16 md:h-16"/>
                    </Card>
                    <Card title="Consultoria" className="variant-blue">
                        <AiOutlineFundProjectionScreen className="w-6 h-6 md:w-16 md:h-16"/>
                    </Card>
                    <Card title="Sistemas Personalizados" className="variant-gray">
                        <HiMiniComputerDesktop className="w-6 h-6 md:w-16 md:h-16"/>
                    </Card>
                </div>
            </section>
            <section className="bg-gray-900 text-white">
                <PlatformBenefits/>
            </section>
            <section className="flex bg-gray-900 text-white flex-col justify-center border-t-4 gap-5 w-full h-fit p-5">
                <Reviews/>
            </section>
        </>
    );
}

export default LandingPage;
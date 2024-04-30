import Card from '@/components/ui/card';
import PlatformBenefits from '@/pages/components/landing-page/platformBenefits';
import Reviews from '@/pages/components/landing-page/reviews';
import consultancy from '@/assets/icons/consultoria.svg';
import projects from '@/assets/icons/projeto.svg';
import customizationIcon from '@/assets/icons/customizacao.svg';
import site from '@/assets/icons/site.svg';

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
                <div className="flex-wrap md:flex-nowrap flex justify-center items-center gap-3 w-full mb-5 md:p-2">
                    <Card title="Customização" className="variant-gray rounded-md md:rounded-sm">
                        <img className="w-8 h-8 md:w-12 md:h-12 z-10" src={customizationIcon} alt="Customização" title="Customização" width={16} height={16}/>
                    </Card>
                    <Card title="Consultoria" className="variant-gray rounded-md md:rounded-sm">
                        <img className="w-8 h-8 md:w-12 md:h-12 z-10" src={consultancy} alt="Consultoria" title="Consultoria" width={16} height={16}/>
                    </Card>
                    <Card title="Projetos" className="variant-gray rounded-md md:rounded-sm">
                        <img className="w-8 h-8 md:w-12 md:h-12 z-10" src={projects} alt="Projetos" title="Projetos" width={16} height={16}/>
                    </Card>
                    <Card title="Site" className="variant-gray w-11/12 rounded-md md:w-[30%] md:rounded-sm">
                        <img className="w-8 h-8 md:w-12 md:h-12 z-10" src={site} alt="Site" title="Site" width={16} height={16}/>
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
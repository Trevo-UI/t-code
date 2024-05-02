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
            <section className="flex items-center w-full h-96 bg-[url('/banners/banner-landing-page-main.png')] bg-cover bg-right md:bg-center lg:h-[500px]">
                <div className="flex flex-col gap-4 w-4/5 mx-auto my-0">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        T-Code Soluções
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-white w-80">
                        Criamos a solução que a sua empresa necessita.
                    </p>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center gap-4 my-5 py-4 w-full h-fit md:h-fit">
                {/*<h3 className="underline-offset-8 underline text-2xl font-bold my-5 text-white bg-blue-700 p-2 rounded-sm">*/}
                {/*    Serviços*/}
                {/*</h3>*/}
                <div className="flex-wrap md:flex-nowrap flex justify-center items-center gap-3 w-full mb-5 md:p-2">
                    <Card title="Customização" link="/servicos" className="variant-gray rounded-md w-[45%] md:w-[30%] md:rounded-sm cursor-pointer">
                        <img className="w-8 h-8 md:w-12 md:h-12 z-10" src={customizationIcon} alt="Customização" title="Customização" width={16} height={16}/>
                    </Card>
                    <Card title="Consultoria" link="/servicos" className="variant-gray rounded-md w-[45%] md:w-[30%] md:rounded-sm cursor-pointer">
                        <img className="w-8 h-8 md:w-12 md:h-12 z-10" src={consultancy} alt="Consultoria" title="Consultoria" width={16} height={16}/>
                    </Card>
                    <Card title="Projetos" link="/servicos" className="variant-gray rounded-md w-[45%] md:w-[30%] md:rounded-sm cursor-pointer">
                        <img className="w-8 h-8 md:w-12 md:h-12 z-10" src={projects} alt="Projetos" title="Projetos" width={16} height={16}/>
                    </Card>
                    <Card title="Site" link="/servicos" className="variant-gray rounded-md w-[45%] md:w-[30%] md:rounded-sm cursor-pointer">
                        <img className="w-8 h-8 md:w-12 md:h-12 z-10" src={site} alt="Site" title="Site" width={16} height={16}/>
                    </Card>
                </div>
            </section>
            <section className="bg-blue-700 text-white">
                <PlatformBenefits/>
            </section>
            <section className="flex bg-gray-100 text-black flex-col justify-center border-t-4 gap-5 w-full h-fit p-5">
                <Reviews/>
            </section>
        </>
    );
}

export default LandingPage;
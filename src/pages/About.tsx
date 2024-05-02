import bannerAbout from '@/assets/banner/banner-about.png';
import { Link } from 'react-router-dom';

function About() {
    return (
        <section className="relative bg-[url(https://wallpapercave.com/wp/wp9081316.jpg)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
            <div className="relative mx-auto max-w-screen-2xl z-10 px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-4xl ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Quem somos
                        <strong className="block font-extrabold text-blue-700">
                            Conheça nossa história
                        </strong>
                    </h1>
                    <span className="flex flex-col gap-2 mt-4 max-w-3xl lg:max-w-4xl sm:text-xl/relaxed">
                        <p>
                            Somos Anderson e João Augusto (Guto), amigos que compartilham uma paixão e um sonho por tecnologia e inovação.
                            Juntos, decidimos fundar a T-Code para oferecer soluções personalizadas e consultoria em sistemas para empresas que buscam potencializar e transformar seus resultados.
                        </p>
                        <p>
                        Nossa jornada começou quando nos deparamos com a necessidade de desenvolver um sistema específico e altamente especializado. Foi aí que percebemos a oportunidade de ajudar outras empresas a enfrentarem desafios semelhantes, entregando soluções sob medida e de alta qualidade.
                        </p>
                        <p>
                        Na T-Code, não apenas criamos software, transformamos sonhos em realidade. Construímos parcerias sólidas com nossos clientes, entendendo suas necessidades e garantindo que cada solução atenda às suas expectativas e objetivos.
                        </p>
                    </span>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
                        <Link to="/servicos" className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-900 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            Serviços
                        </Link>
                        <Link to="/contato" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-700 shadow hover:text-gray-900 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                            Contato
                        </Link>
                    </div>
                </div>
            </div>
            <img className="absolute right-0 top-0 w-fit h-full object-contain z-1 opacity-75 md:opacity-100" src={bannerAbout} alt="Banner sobre a empresa" width={1024} height={845} />
        </section>
    )
}

export default About;
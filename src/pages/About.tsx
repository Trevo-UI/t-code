import bannerAbout from '@/assets/banner/banner-about.png';
import { Link } from 'react-router-dom';

function About() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
            <div className="relative mx-auto max-w-screen-2xl z-10 px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-4xl ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl animate__fadeInDown duration-1000">
                        Quem somos
                        <strong className="block font-extrabold text-blue-700">
                            Conheça nossa história
                        </strong>
                    </h1>
                    <span className="flex flex-col gap-2 mt-8 max-w-3xl lg:max-w-4xl sm:text-xl/relaxed animate__fadeIn duration-1000">
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
                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-center animate__fadeIn duration-1000">
                        <Link to="/servicos" title="Ver serviços" className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-900 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            Serviços
                        </Link>
                        <Link title="Chamar no whatsapp" to="https://api.whatsapp.com/send?phone=5547984985607&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20minha%20empresa" className="block w-full rounded bg-green-500 px-12 py-3 text-sm font-medium text-white shadow hover:text-gray-900 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                            Contato
                        </Link>
                    </div>
                </div>
            </div>
            <img className="absolute right-0 top-0 w-fit h-full object-contain z-1 opacity-75 md:opacity-100 animate__rotateInDownRight duration-1000" src={bannerAbout} alt="Banner sobre a empresa" width={1024} height={845} />
        </section>
    )
}

export default About;
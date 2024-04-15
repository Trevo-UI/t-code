import bannerAbout from '@/assets/banner/banner-about.png';
import { Link } from 'react-router-dom';

function About() {
    return (
        <section className="relative bg-[url(https://wallpapercave.com/wp/wp9081316.jpg)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
            <div className="relative mx-auto max-w-screen-xl z-10 px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Quem somos
                        <strong className="block font-extrabold text-blue-800"> Conheça nossa história </strong>
                    </h1>
                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea!
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
                        <Link to="/servicos" className="block w-full rounded bg-blue-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-900 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            Serviços
                        </Link>
                        <Link to="/contato" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-800 shadow hover:text-gray-900 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
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
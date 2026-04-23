import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill, BsGearFill, BsFolder2Open } from "react-icons/bs";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { WHATSAPP_URL } from '@/config/site';

function MenuMobile() {
    return (
        <Menubar className="flex items-center justify-center p-2 w-10 h-10 bg-blue-700 border-0">
            <MenubarMenu>
                <MenubarTrigger className="p-0 w-full h-full focus:bg-transparent data-[state=open]:bg-accent[data-state=open] bg-transparent">
                    <CgMenu className="text-white w-full h-full"/>
                </MenubarTrigger>
                <MenubarContent className="bg-blue-700 w-screen rounded-none mt-5 border-none">
                    <Link to="/" title="Voltar ao início" className="text-white">
                        <MenubarItem>
                            Início
                            <MenubarShortcut className="text-white">
                                <AiFillHome className="text-white"/>
                            </MenubarShortcut>
                        </MenubarItem>
                    </Link>

                    <MenubarSeparator />
                    <Link to="/sobre-a-empresa" title="saiba mais sobre a empresa" className="text-white">
                        <MenubarItem>
                            Empresa
                            <MenubarShortcut className="text-white">
                                <BsFillPeopleFill className="text-white"/>
                            </MenubarShortcut>
                        </MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    <Link to="/servicos" title="Veja nossos serviços" className="text-white">
                        <MenubarItem>
                            Serviços
                            <MenubarShortcut className="text-white">
                                <BsGearFill className="text-white"/>
                            </MenubarShortcut>
                        </MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    <Link to="/projetos" title="Projetos desenvolvidos" className="text-white">
                        <MenubarItem>
                            Projetos
                            <MenubarShortcut className="text-white">
                                <BsFolder2Open className="text-white"/>
                            </MenubarShortcut>
                        </MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    <a
                        href={WHATSAPP_URL}
                        title="Chamar no WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                    >
                        <MenubarItem className="text-base font-medium">
                            Contato
                        </MenubarItem>
                    </a>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}

export default MenuMobile;
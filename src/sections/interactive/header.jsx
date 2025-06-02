import { useState } from 'react'
import eeveeLogo from "../../assets/logo-eevee.png"
import printableDoc from "../../../public/impresion.pdf?url"

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@heroui/react";

function Header({ player = "dev", checks } = props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className='mb-4'>
            <NavbarContent justify="end">
                <NavbarBrand className='justify-center'>
                    <img src={eeveeLogo} className='h-20 object-scale-down' />
                </NavbarBrand>
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem key="a">
                    <Link
                        className="w-full"
                        color="primary"
                        href={printableDoc}
                        size="lg"
                    >
                        Version para Imprimir
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}

export default Header



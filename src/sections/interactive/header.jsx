import { useState } from 'react'
import eeveeLogo from "../../../public/logo-eevee.png"

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@heroui/react";

function Header() {
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
                        href="#hoja"
                        size="lg"
                    >
                        Version Imprimible
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}

export default Header



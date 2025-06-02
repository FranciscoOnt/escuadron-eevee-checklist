import { useState } from 'react'
import eeveeLogo from "../../assets/logo-eevee.png"

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@heroui/react";
import SendButton from './sendButton';

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
                        href="#hoja"
                        size="lg"
                    >
                        Version Imprimible
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem key="send">
                    <SendButton checks={checks} player={player} />
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}

export default Header



import {
    Button,
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    useDisclosure
} from "@heroui/react";

function RulesButton() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                className="w-full"
                color="secondary"
                onPress={() => onOpen()}
                variant="bordered"
            >
                Ver Reglamento
            </Button>
            <Drawer isOpen={isOpen} size="full" placement="bottom" onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Reglamento de la Dinámica</DrawerHeader>
                            <DrawerBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                                    adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                    officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                </p>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="primary" onPress={onClose} className="mb-16">
                                    Cerrar
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default RulesButton

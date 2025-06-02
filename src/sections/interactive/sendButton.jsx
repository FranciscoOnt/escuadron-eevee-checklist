import {
    Alert,
    Button,
    Divider,
    Spinner,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@heroui/react";
import { useState } from "react";
import { Checkmark } from 'react-checkmark'

function SendButton({ player, checks } = props) {
    const [isSending, setIsSending] = useState(false);
    const [sentData, setSentData] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [error, setError] = useState(undefined);

    const checkCount = Object.values(checks).filter(value => value).length;

    const sendData = () => {
        setIsSending(true)
        const url = `https://script.google.com/macros/s/${import.meta.env.VITE_GOOGLE_SCRIPT_MACRO_ID}/exec`;

        const list = Object.keys(checks).filter((check) => checks[check] === true).join(", ")

        const body = `dateTime=${new Date().toLocaleString()}&player=${player}&count=${checkCount}&list=${list}`

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body,
        }).then(res => res.text()).then(data => {
            setSentData(data === "success");
            setIsSending(false);
            setError(data === "closed")
            setTimeout(() => {
                // reset after 10s
                setSentData(true);
                setIsSending(false);
                setError(undefined);
            }, 10000);
        }).catch(error => setError(error))
    }

    return (
        <>
            <Button
                className="w-full"
                color={isSending || !player ? "default" : "success"}
                isLoading={isSending || sentData}
                onPress={() => onOpen()}
                isDisabled={isSending || sentData || !player || checkCount == 0}
                spinner={sentData ? <div className='overflow-clip' ><Checkmark size='medium' /></div> : <Spinner color="success" size="sm" />}
                size="lg"
                variant="bordered"
            >
                {sentData ? 'Enviado' : isSending ? 'Enviando' : 'Enviar'}
            </Button>
            {error && error == "closed" && <Alert color="secondary" title={`Lo sentimos, la dinamica ha concluido, gracias por participar!`} />}
            {error && error !== "closed" && <Alert color="danger" title={`Ha ocurrido un error, por favor vuelve a intentarlo mas tarde.`} />}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
                <ModalContent className="bg-gray-100">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Confirmar Envío
                            </ModalHeader>
                            <Divider />
                            <ModalBody>
                                <p>Estas seguro que deseas enviar tu lista?</p>
                                <p>En caso de enviar mas de una lista solo se tomará en cuenta la mas reciente.</p>
                                <p>En caso de ser candidato a ganador se te contactará para que proporciones las evidencias de los Pokemon que hayas atrapado.</p>
                                <p>No olvides revisar las reglas.</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button color="primary" onPress={() => { sendData(); onClose() }}>
                                    Confirmar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default SendButton

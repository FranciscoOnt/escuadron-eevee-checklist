import {
    Button,
} from "@heroui/react";

function SendButton({ player, checks } = props) {
    const sendData = () => {
        const url = `https://script.google.com/macros/s/${import.meta.env.VITE_GOOGLE_SCRIPT_MACRO_ID}/exec`;
        const count = Object.values(checks).filter(value => value).length;
        const list = Object.keys(checks).filter((check) => checks[check] === true).join(", ")

        const body = `dateTime=${new Date().toLocaleString()}&player=${player}&count=${count}&list=${list}`

        console.log(body);

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body,
        }).then(res => res.text()).then(data => {
            alert(data)
        }).catch(error => console.log(error))
    }

    return (
        <Button variant="bordered" onPress={() => sendData()}>
            Send
        </Button>
    );
}

export default SendButton

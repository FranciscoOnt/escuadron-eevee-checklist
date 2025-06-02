import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Progress
} from "@heroui/react";
import SendButton from "./sendButton";

function Footer({ player, checks } = props) {
    return (
        <Card className="w-full p-4">
            <CardBody>
                <SendButton player={player} checks={checks} />
            </CardBody>
        </Card>
    );
}

export default Footer



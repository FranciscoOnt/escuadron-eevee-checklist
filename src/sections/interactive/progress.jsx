import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Progress,
    CardFooter
} from "@heroui/react";
import SendButton from "./sendButton";
import RulesButton from "./rulesButton";

function ProgressCard({ checked = 0, checks, total = 1, player, updatePlayer } = props) {
    return (
        <Card className="w-full p-4">
            <CardHeader className="flex justify-between pb-0 flex-wrap">
                <Input isRequired className="basis-full mb-2" label="Nombre del Jugador" placeholder="" value={player} onValueChange={updatePlayer} />
                <p className="text-md font-bold">Progreso</p>
                <p className="text-md font-bold">{checked} de {total}</p>
            </CardHeader>
            <CardBody>
                <Progress aria-label="progreso" color="success" value={(checked * 100) / total} />
            </CardBody>
            <CardFooter className="flex flex-col gap-2">
                <SendButton checks={checks} player={player} />
                <RulesButton />
            </CardFooter>
        </Card>
    );
}

export default ProgressCard



import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Progress
} from "@heroui/react";

function ProgressCard({ checked = 0, total = 1, player, updatePlayer } = props) {
    return (
        <Card className="w-full p-4">
            <CardHeader className="flex justify-between pb-0 flex-wrap">
                <Input className="basis-full mb-2" label="Nombre del Jugador" placeholder="" value={player} onValueChange={updatePlayer} />
                <p className="text-md font-bold">Progreso</p>
                <p className="text-md font-bold">{checked} de {total}</p>
            </CardHeader>
            <CardBody>
                <Progress aria-label="progreso" color="success" value={(checked * 100) / total} />
            </CardBody>
        </Card>
    );
}

export default ProgressCard



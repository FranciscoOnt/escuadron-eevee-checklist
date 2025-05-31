import {
    Card,
    CardHeader,
    CardBody,
    Divider,
    Progress
} from "@heroui/react";

function ProgressCard({ checked = 0, total = 1 } = props) {
    return (
        <Card className="w-full p-4">
            <CardHeader className="flex justify-between pb-0">
                <p className="text-md">Progreso </p>
                <p className="text-md font-bold">{checked} de {total}</p>
            </CardHeader>
            <CardBody>
                <Progress aria-label="progreso" color="success" value={(checked * 100) / total} />
            </CardBody>
        </Card>
    );
}

export default ProgressCard



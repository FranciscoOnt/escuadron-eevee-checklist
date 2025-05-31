import {
    Card,
    CardFooter,
    CardBody,
} from "@heroui/react";

function ChecklistCard({ name, image, borderColor, checks, checkCard } = props) {
    return (
        <Card
            isPressable
            onPress={() => checkCard(name, !checks[name])}
            className={`flex col-span-1 p-2 ${borderColor && "border-2"} transition-colors ${checks[name] ? "bg-green-200 border-green-500" : "bg-white " + borderColor}`}
        >
            <CardBody className="pb-0">
                <img src={image} className="object-scale-down mix-blend-multiply" />
            </CardBody>
            <CardFooter className="text-center text-sm px-0 pt-0">
                <p className="w-full">{name}</p>
            </CardFooter>
        </Card>
    );
}

export default ChecklistCard



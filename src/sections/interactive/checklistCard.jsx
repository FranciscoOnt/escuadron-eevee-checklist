import {
    Card,
    CardFooter,
    CardBody,
} from "@heroui/react";
import { Checkmark } from 'react-checkmark'

function ChecklistCard({ name, image, borderColor, checks, checkCard } = props) {
    const isChecked = checks[name];

    return (
        <Card
            isPressable
            onPress={() => checkCard(name, !isChecked)}
            className={`flex col-span-1 p-2 transition-colors duration-100 border-2 ${isChecked ? "border-green-500" : borderColor ?? "border-white"} `}
        >
            <CardBody className="pb-0 relative">
                <img src={image} className="object-scale-down mix-blend-multiply" />
                <div className='z-10 absolute top-0 right-0 overflow-clip' >
                    {isChecked && <Checkmark size='medium' />}
                </div>
            </CardBody>
            <CardFooter className="text-center text-sm px-0 pt-0">
                <p className="w-full">{name}</p>
            </CardFooter>
        </Card>
    );
}

export default ChecklistCard



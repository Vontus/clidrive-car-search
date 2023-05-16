import { Car } from "@/integrations/carapi/types";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  car: Car;
};

export const CarCard: FC<Props> = ({ car }) => {
  return (
    <Card>
      <CardBody>
        <Image src="car-placeholder.png" alt="Car" />
      </CardBody>
      <CardHeader>
        <Heading size="md">
          <Text
            noOfLines={1}
            className="car-name"
          >{`${car.make.name} ${car.name}`}</Text>
        </Heading>
      </CardHeader>
    </Card>
  );
};

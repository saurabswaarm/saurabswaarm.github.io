import { Image, Heading, Box, SimpleGrid } from "@chakra-ui/react";

import angular from "../Assets/angular.png";
import dart from "../Assets/dart.png";
import aftereffects from "../Assets/aftereffects.png";
import graphql from "../Assets/graphql.png";
import react from "../Assets/react.png";
import flutter from "../Assets/flutter.png";
import miro from "../Assets/miro.png";
import sketch from "../Assets/sketch.png";

const Technologgies = () => {
  return (
    <>
      <Box pt={10}>
        <Heading color={"pink.500"} pb={2} size={"xl"}>
          Technologies
        </Heading>
        <SimpleGrid columns={[2, 3]} spacing={2}>
          <Image src={angular} border={"2px solid RGBA(0, 0, 0, 0.06)"} />
          <Image src={react} border={"2px solid RGBA(0, 0, 0, 0.06)"} />
          <Image src={dart} border={"2px solid RGBA(0, 0, 0, 0.06)"} />
          <Image src={graphql} border={"2px solid RGBA(0, 0, 0, 0.06)"} />
          <Image src={flutter} border={"2px solid RGBA(0, 0, 0, 0.06)"} />
        </SimpleGrid>
      </Box>
      <Box pt={10}>
        <Heading color={"pink.500"} pb={2} size={"xl"}>
            Design Softwares
        </Heading>
        <SimpleGrid columns={[2,3]} spacing={2}>
            <Image src={miro} border={"2px solid RGBA(0,0,0,0.06)"}/>
            <Image src={sketch} border={"2px solid RGBA(0,0,0,0.06)"}/>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Technologgies;

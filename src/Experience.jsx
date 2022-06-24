import {
  Container,
  Divider,
  Image,
  HStack,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import swaarmlogo from "./Assets/Swaarm.png";

const Experience = () => {
  return (
    <>
      <HStack>
        <Image src={swaarmlogo} />
        <Divider orientation={"vertical"} height="50px" />
        <VStack spacing={0} align={"start"}>
          <Text fontWeight={600} fontSize={20} p={0}>
            React Frontend Engineer
          </Text>
          <Text p={0}>Berlin, Germany (remote) | Jan 2022 - Present</Text>
        </VStack>
      </HStack>
      <Text pt={"3"}>
        Swarm is an AdTech platform that manages adnetworks and their
        Advertisers, Publishers and Campaigns
      </Text>
      <UnorderedList pt={"3"}>
        <ListItem>Used Typescript, Ant Design, Final Forms, GraphQL Codegen, CSS Modules, to build new features into the product and modify existing ones.</ListItem>
      </UnorderedList>

    </>
  );
};

export default Experience;

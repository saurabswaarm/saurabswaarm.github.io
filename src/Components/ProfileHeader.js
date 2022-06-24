import { Box, Heading, Text } from "@chakra-ui/react";
import ColorText from "./ColorText";

const ProfileHeader = () => {
  return (
    <>
      <Heading
        fontSize={{base:"6xl", md:"8xl"}}
        color={"pink.500"}
        lineHeight={0.9}
      >
        SAURAB
        <br /> SALHOTRA
      </Heading>
      <Box maxW="xl" pt={3}>
        <Text fontSize={{base:"xl", md:"3xl"}} fontWeight={"bold"} lineHeight={{base:"shorter", md:"normal"}}>
          <ColorText color={"green.500"}>Frontend Engineer</ColorText> with a
          focus on <ColorText color={"teal.400"}>UX Research</ColorText> and{" "}
          <ColorText color={"purple.400"}>Product Design.</ColorText>
        </Text>
      </Box>
    </>
  );
};

export default ProfileHeader;

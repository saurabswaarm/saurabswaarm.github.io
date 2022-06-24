import { Box, Heading, Text } from "@chakra-ui/react";

const ProfileText = () => {
  return (
    <Box pt={8}>
      <Heading size="md" color="pink.500">About me</Heading>
      <Text fontWeight="400" pt={2}>
        Self Taught Typescript / Dart Engineer and Designer with around 2 years
        of experience developing products with Angular, React and Flutter,
        having over 3 years of experience with UI design, a passion for UX
        Research, loves brainstorming and developing new features that increase
        customer acquisition and retention.{" "}
      </Text>
    </Box>
  );
};

export default ProfileText;

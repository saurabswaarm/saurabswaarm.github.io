import {Text} from "@chakra-ui/react";

const ColorText = ({ color, children }) => (
    <Text as={"span"} color={color}>
      {children}
    </Text>
  );

  export default ColorText;
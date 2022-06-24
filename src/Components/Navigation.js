import { Button, HStack } from "@chakra-ui/react"

const Navigation = () => {
    return (
        <HStack pt={10} spacing={3}>
            <Button>Profile</Button>
            <Button>Experience</Button>
            <Button>Tech Stack</Button>
        </HStack>
    )
}

export default Navigation;
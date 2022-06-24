import { Button, HStack, Link, Text } from "@chakra-ui/react"
import {Link as RouterLink, useLocation} from "react-router-dom";

const Navigation = () => {
   
    return (
        <HStack pt={10} pb={2} spacing={3} fontSize={"12"} fontWeight={"500"}>
            <NavItem to={"/"}>profile</NavItem>
            <NavItem to={"/experience"}>experience</NavItem>
            <NavItem to={"/stack"}>stack</NavItem>
        </HStack>
    )
}

const NavItem = ({to, children}) => {
    const {pathname} = useLocation();
    return (
        <Link as={RouterLink} to={to}>
            <Text color={pathname == to ? "blackAlpha.900" : "blackAlpha.600"} textDecoration={"none"}>
                {children}
            </Text>
        </Link>
    )
}

export default Navigation;
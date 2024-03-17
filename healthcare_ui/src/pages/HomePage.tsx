import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const HomePage = () => {
    return(
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className = {navigationMenuTriggerStyle()}>
                    Hello
                </NavigationMenuItem>
                <NavigationMenuItem className = {navigationMenuTriggerStyle()}>
                    Some ting
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default HomePage
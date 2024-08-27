import { AppShell, Burger, Image, Flex, Text, Skeleton, Button } from "@mantine/core";
import { Link } from "@remix-run/react";
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';
import logo from '@/images/logo.svg';

const CustomAppShell = ({ main }: { main: ReactNode }) => {

    const [mobileNavbarOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopNavbarOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: { base: 300 }, breakpoint: 'sm', collapsed: { mobile: !mobileNavbarOpened } }}
            padding="md"
            className="bg-gray-100"
        >
            <AppShell.Header>
                <Flex align="center" justify={"flex-start"} h="100%" w="100%" px="md" direction="row">
                    <Burger opened={mobileNavbarOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                    <Image src={logo} alt="logo" width={40} height={40} style={{ width: '40px', height: '40px' }} />
                    <Text ml="sm" size="xl" fw={700} tt="uppercase" c={"indigo"}> Genova </Text>
                    <Text ml="4" size="xl" fw={700} tt="uppercase" c={"indigo"}>ACADEMY</Text>
                    <Flex gap={"md"} align={"center"} justify={"flex-end"} w="100%" mr={"xl"}>
                        <Link to={""}>
                            <Text size="sm">コース一覧</Text>
                        </Link>
                        <Link to={""}>
                            <Text size="sm">マイページ</Text>
                        </Link>

                        <Button ml={"md"}>
                            <Text size="sm">Login</Text>
                        </Button>
                    </Flex>
                </Flex>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Text mb="md">Navbar</Text>
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} height={28} mt="sm" animate={false} />
                    ))}
            </AppShell.Navbar>

            <AppShell.Main>{main}</AppShell.Main>
        </AppShell>
    );
}

export default CustomAppShell;
import { Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react"
import { Header } from "../../components/header/Header"

export const SignUpPage = () => {
    const currentPage = 'signup';
    return(
        <Flex direction='column' justify='flex-start' height='100vh'>
            <Header currentPage={currentPage}/>
            <Flex flex='1' direction='column' justify='space-between' padding='28px'>
                <Flex flex='2' direction='column' justify='space-between'>
                
                    <Text color='gray.900' fontSize='36px' fontWeight='700'>Olá, boas vindas ao LabEddit ;)</Text>

                    <Flex direction='column' justify='center' gap='6px'>
                            <Input
                            fontSize="16px"
                            height="60px"
                            placeholder="Apelido"
                            size="md"
                            _placeholder={{ color: "inherit", fontSize: "16px" }}
                            />
                            <Input
                            fontSize="16px"
                            height="60px"
                            placeholder="E-mail"
                            size="md"
                            _placeholder={{ color: "inherit", fontSize: "16px" }}
                            ></Input>
                            <Input
                            fontSize="16px"
                            height="60px"
                            placeholder="Senha"
                            size="md"
                            _placeholder={{ color: "inherit", fontSize: "16px" }}
                            ></Input>
                    </Flex>
                </Flex>
                <Flex flex='1' direction='column' justify='center' gap='20px'>
                    <Text fontSize='14px'>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</Text>
                    <Checkbox size='sm' iconColor='blue.400' iconSize='50px'>
                        Eu concordo em receber emails sobre coisas legais no Labeddit
                    </Checkbox>
                    <Button variant='gradient'>Cadastrar</Button>
                </Flex>
            </Flex>

        </Flex>
    )
}
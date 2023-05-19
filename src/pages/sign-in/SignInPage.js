import logo from "../../assets/logo.png";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { StackDivider } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'
import { goToSignUpPage } from "../../routes/coordinator";

export const SignInPage = () => {
    const navigator = useNavigate()
  return (
    <Flex
      direction="column"
      gap="48px"
      justify="center"
      height="100vh"
      padding='28px'
    >
      <Flex direction="column" gap="100px">
        <Flex direction="column" align="center">
          <Image boxSize="84px" src={logo} alt="Logo" />
          <Text color='gray.900' fontSize='36px' fontWeight='700'>Labeddit</Text>
          <Text>O projeto de rede social da Labenu</Text>
        </Flex>
        <Flex direction='column' gap='6px'>
          <Input
            fontSize="16px"
            height="60px"
            placeholder="E-mail"
            size="md"
            _placeholder={{ color: "inherit", fontSize: "16px" }}
          />
          <Input
            fontSize="16px"
            height="60px"
            placeholder="Senha"
            size="md"
            _placeholder={{ color: "inherit", fontSize: "16px" }}
          ></Input>
        </Flex>
      </Flex>
      <Flex direction='column'>
        <VStack gap="12px" divider={<StackDivider borderColor="orange.500" />}>
          <Button variant="gradient">Continuar</Button>
          <Button variant="withoutbg" onClick={()=>goToSignUpPage(navigator)} >Crie uma conta!</Button>
        </VStack>
      </Flex>

    </Flex>
  );
};

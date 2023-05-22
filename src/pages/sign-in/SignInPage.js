import logo from "../../assets/logo.png";
import { Button, Divider } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'
import { goToFeedPage, goToSignUpPage } from "../../routes/coordinator";
import { useForm } from "../../hooks/useForm";
import { signIn } from "../../apiReq/apiReq";
import { useState } from "react";

export const SignInPage = () => {

    const [errorMessage, setErrorMessage] = useState("");

    const [form, onChangeInputs, clearInputs] = useForm(
      {
        email: "",
        password: ""
      }
    )
    const navigator = useNavigate()

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await signIn({
          email: form.email,
          password: form.password
        })
        localStorage.setItem("tokenLabeddit", response.token)
        console.log(response)
        goToFeedPage(navigator)
      } catch (error) {
        setErrorMessage(error.response.data);
      }
    }

  return (
    <Flex
      direction="column"
      justify="space-around"
      height="100vh"
      padding='28px'
    >
        <Flex direction="column" align="center">
          <Image boxSize="84px" src={logo} alt="Logo" />
          <Text color='gray.900' fontSize='36px' fontWeight='700'>Labeddit</Text>
          <Text>O projeto de rede social da Labenu</Text>
        </Flex>
        <form onSubmit={onSubmit}>
          <Flex direction='column' gap='6px'>
          {errorMessage ? (
                <Text color="red">{errorMessage}</Text>
              ) : undefined}
          <Input
              value={form.email}
              type="text"
              name="email"
              onChange={onChangeInputs}
              fontSize="16px"
              height="60px"
              placeholder="E-mail"
              size="md"
              _placeholder={{ color: "inherit", fontSize: "16px" }}
            ></Input>
            <Input
              value={form.password}
              type="password"
              name="password"
              onChange={onChangeInputs}
              fontSize="16px"
              height="60px"
              placeholder="Senha"
              size="md"
              _placeholder={{ color: "inherit", fontSize: "16px" }}
            />
          <Button type="submit" variant="gradient" margin='48px 0 12px 0'>Continuar</Button>
          <Divider borderWidth="0.6px" borderColor="orange.500" orientation="horizontal" />
          <Button variant="withoutbg" marginTop='12px' onClick={()=>goToSignUpPage(navigator)} >Crie uma conta!</Button>
          </Flex>
        </form>
      </Flex>
  );
};

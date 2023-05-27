import { Button, Checkbox, Flex, Input, Text, Image } from "@chakra-ui/react";
import { Header } from "../../components/header/Header";
import { useForm } from "../../hooks/useForm";
import { signUp } from "../../apiReq/apiReq";
import { goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router";
import { useState } from "react";
import loadingGif from '../../assets/loading.gif'

export const SignUpPage = () => {
  const navigator = useNavigate();

  const [isLoading, setIsLoading] = useState(false)

  const [errorMessage, setErrorMessage] = useState("");

  const [checkBox, setCheckBox] = useState(false);

  const [form, onChangeInputs, clearInputs] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    try {
      const response = await signUp({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      localStorage.setItem("tokenLabeddit", response.token);
      localStorage.setItem("userName", response.user.name)
      setIsLoading(false)
      goToFeedPage(navigator);
    } catch (error) {
      setErrorMessage(error.response.data);
      setIsLoading(false)
      console.log(error.response.data || "erro inesperado");
    }
  };

  const currentPage = "signup";
  return (
    <Flex direction="column" justify="flex-start" height="100vh">
      <Header currentPage={currentPage} />
      <Flex flex="1" direction="column" justify="space-between" padding="28px">
        <Flex flex="2" direction="column" justify="space-between">
          <Text color="gray.900" fontSize="36px" fontWeight="700">
            Olá, boas vindas ao LabEddit ;)
          </Text>
          {isLoading? <Image maxWidth='200px' alignSelf="center" src={loadingGif} alt="Carregando..."/>:
          <form onSubmit={onSubmit}>
            <Flex direction="column" justify="center" gap="6px">
              {errorMessage ? (
                <Text color="red">{errorMessage}</Text>
              ) : undefined}
              <Input
                value={form.name}
                type="text"
                name="name"
                onChange={onChangeInputs}
                fontSize="16px"
                height="60px"
                placeholder="Apelido"
                size="md"
                _placeholder={{ color: "inherit", fontSize: "16px" }}
              />
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
              ></Input>
              <Text fontSize="11px" color="gray.700" alignSelf="center"> 8 - 12 caracteres com números e letras</Text>
              <Text marginTop="64px" fontSize="14px">
                Ao continuar, você concorda com o nosso Contrato de usuário e
                nossa Política de Privacidade
              </Text>
              <Checkbox
                isChecked={checkBox}
                on
                onChange={(e) => setCheckBox(e.target.checked)}
                marginTop="12px"
                size="sm"
                iconColor="blue.400"
                iconSize="50px"
              >
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </Checkbox>
              <Button
                type="submit"
                marginTop="12px"
                marginBottom="12px"
                variant="gradient"
                transition='0.6s' 
                _active={{bg: "blue.500"}} 
                _hover={{bg: "blue.500"}}
              >
                Cadastrar
              </Button>
            </Flex>
          </form>}
        </Flex>
      </Flex>
    </Flex>
  );
};

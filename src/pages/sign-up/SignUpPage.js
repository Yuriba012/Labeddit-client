import { Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import { Header } from "../../components/header/Header";
import { useForm } from "../../hooks/useForm";
import { signUp } from "../../apiReq/apiReq";
import { goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router";
import { useState } from "react";

export const SignUpPage = () => {
  const navigator = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const [checkBox, setCheckBox] = useState(false);

  const [form, onChangeInputs, clearInputs] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      localStorage.setItem("tokenLabeddit", response.token);
      console.log(response);
      goToFeedPage(navigator);
    } catch (error) {
      setErrorMessage(error.response.data);
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
              >
                Cadastrar
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

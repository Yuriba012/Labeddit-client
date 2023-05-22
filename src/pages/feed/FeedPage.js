import {
  Button,
  Flex,
  StackDivider,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../../components/header/Header";
import { PostCard } from "../../components/post/PostCard";
import { useEffect, useState } from "react";
import { createPost, getPosts } from "../../apiReq/apiReq";
import { useForm } from "../../hooks/useForm";
import { FormStyled } from "./style";
import { deleteItem, editItem, like } from "../../apiReq/cardFunctions";

export const FeedPage = () => {
  const [postsList, setPostsList] = useState([]);
  const currentPage = "feed";

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: "",
  });

  const likePostPage = async (isComment, id, value) => {
    await like(isComment, id, value, setErrorMessage, setSuccessMessage);
  };

  const deleteFeedCard = async (isComment, id) => {
    await deleteItem(isComment, id, setErrorMessage, setSuccessMessage);
  };

  const editContentFeed = async (isComment, id, newContent) => {
    await editItem(
      isComment,
      id,
      newContent,
      setErrorMessage,
      setSuccessMessage
    );
  };

  const requestPosts = async (token) => {
    try {
      const response = await getPosts(token);
      setPostsList(response);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPost(localStorage.getItem("tokenLabeddit"), {
        content: form.content,
      });
      clearInputs();
      setSuccessMessage(response);
    } catch (error) {
      console.log(error.response.data);
      setErrorMessage(error.response.data);
    }
  };

  useEffect(() => {
    requestPosts(localStorage.getItem("tokenLabeddit"));
  }, [postsList]);

  return (
    <Flex direction="column" justify="flex-start" height="100vh">
      <Header currentPage={currentPage} />
      <Flex flex="1" direction="column" justify="space-between" padding="28px">
        <VStack gap="18px" divider={<StackDivider borderColor="orange.500" />}>
          <FormStyled onSubmit={onSubmit}>
            <Flex
              direction="column"
              justify="flex-start"
              width="100%"
              gap="12px"
            >
              {errorMessage ? (
                <Text color="red">{errorMessage}</Text>
              ) : undefined}
              <Textarea
                value={form.content}
                type="text"
                name="content"
                onChange={onChangeInputs}
                fontSize="16px"
                height="131px"
                borderRadius="12px"
                placeholder="Escreva seu post..."
                bg="gray.500"
                _placeholder={{ color: "inherit", fontSize: "16px" }}
              ></Textarea>
              <Button type="submit" variant="gradient">
                Postar
              </Button>
            </Flex>
          </FormStyled>
          <Flex direction="column" justify="flex-start" width="100%" gap="12px">
            {postsList.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  post={post}
                  like={likePostPage}
                  deleteCard={deleteFeedCard}
                  editContent={editContentFeed}
                />
              );
            })}
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};

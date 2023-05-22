import { Button, Flex, StackDivider, Text, Textarea, VStack } from "@chakra-ui/react";
import { Header } from "../../components/header/Header";
import { PostCard } from "../../components/post/PostCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createComment, getCommentsByPostId, getPostById } from "../../apiReq/apiReq";
import { useForm } from "../../hooks/useForm";
import { FormStyled } from "../feed/style";
import { deleteItem, like, editItem } from "../../apiReq/cardFunctions";
import { goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const PostPage = () => {
  const { id } = useParams();
  const navigator = useNavigate()
  const [post, setPost] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

const likePostPage = async (isComment, id, value) => {
  await like(isComment, id, value, setErrorMessage, setSuccessMessage)
}

const deletePostPageCard = async (isComment, id) => {
  await deleteItem(isComment, id, setErrorMessage, setSuccessMessage)
}

const editContentPostPage = async (isComment, id, newContent) => {
  await editItem(
    isComment,
    id,
    newContent,
    setErrorMessage,
    setSuccessMessage
  );
};

  const [form, onChangeInputs, clearInputs] = useForm({
      content: ""
  });

  const requestPost = async (token, id) => {
    try {
      const response = await getPostById(token, id);
      setPost(response);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data)
      goToFeedPage(navigator)
    }
  };

  const requestComments = async (token, id) => {

    try {
      const response = await getCommentsByPostId(token, id);
      setCommentsList(response);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data)
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createComment(localStorage.getItem("tokenLabeddit"), {
        content: form.content,
      }, id);
      setSuccessMessage(response)
      clearInputs();
    } catch (error) {
      console.log(error.response.data);
      setErrorMessage(error.response.data);
    }
  };


  useEffect(() => {
    requestPost(localStorage.getItem("tokenLabeddit"), id);
  }, [successMessage ,id, commentsList]);

  useEffect(() => {
    requestComments(localStorage.getItem("tokenLabeddit"), id);
  }, [successMessage, id]);




  const currentPage = "post";

  return (
    <Flex direction="column" justify="flex-start" height="100vh">
      <Header currentPage={currentPage} />
      <Flex
        flex="1"
        direction="column"
        justify="flex-start"
        padding="28px"
        gap="12px"
      >

        {post !== ""?<PostCard post={post} like = {likePostPage} deleteCard = {deletePostPageCard} editContent={editContentPostPage} />:undefined}
        {errorMessage ? (
                <Text color="red">{errorMessage}</Text>
              ) : undefined}
        <VStack gap="18px" divider={<StackDivider borderColor="orange.500" />}>
            <FormStyled onSubmit={onSubmit}>
          <Flex direction="column" justify="flex-start" width="100%" gap="12px">
            <Textarea
            value={form.content}
            type="text"
            name="content"
            onChange={onChangeInputs}
              fontSize="16px"
              height="131px"
              borderRadius="12px"
              placeholder="Adicionar comentário"
              bg="gray.500"
              _placeholder={{ color: "inherit", fontSize: "16px" }}
            ></Textarea>
            <Button type="submit" variant="gradient">Responder</Button>
          </Flex>
          </FormStyled>
          <Flex direction="column" justify="flex-start" width="100%" gap="12px">
            {commentsList.length !== 0?commentsList.map((comment) => (
              <PostCard key={comment.id} post={comment}  like = {likePostPage} deleteCard={deletePostPageCard} editContent={editContentPostPage} />
            )): undefined}
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};

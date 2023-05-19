import { Button, Flex, Input, Spacer, StackDivider, VStack } from "@chakra-ui/react"
import { Header } from "../../components/header/Header"
import { PostCard } from "../../components/post/PostCard"

export const PostPage
 = () => {
    const isComment = true
    const currentPage = 'post'
    return(
        <Flex direction='column' justify='flex-start' height='100vh'>
        <Header currentPage={currentPage}/>
        <Flex flex='1' direction='column' justify='space-between' padding='28px' gap='12px'>
            <PostCard isComment={false}/>
            <VStack gap="18px" divider={<StackDivider borderColor="orange.500"/>} >
                <Flex direction='column' justify='flex-start' width='100%' gap='12px'>
                        <Input
                        fontSize="16px"
                        height="131px"
                        borderRadius='12px'
                        placeholder="Adicionar comentário"
                        bg='gray.500'
                        _placeholder={{ color: "inherit", fontSize: "16px" }}
                        ></Input>
                    <Button variant='gradient'>Responder</Button>
                </Flex>
                <Flex direction='column' justify='flex-start' width='100%' gap='12px'>
                    <PostCard isComment={isComment}/>
                    <PostCard isComment={isComment}/>
                    <PostCard isComment={isComment}/>
                    <PostCard isComment={isComment}/>
                    <PostCard isComment={isComment}/>
                    <PostCard isComment={isComment}/>
                </Flex>
            </VStack>
        </Flex>
    </Flex>
    )
}
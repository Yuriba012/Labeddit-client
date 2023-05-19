import { Button, Flex, Input, StackDivider, VStack } from "@chakra-ui/react"
import { Header } from "../../components/header/Header"
import { PostCard } from "../../components/post/PostCard"

export const FeedPage = () => {
    const currentPage = 'feed'
    const isComment = false;
    return(
        <Flex direction='column' justify='flex-start' height='100vh'>
        <Header currentPage={currentPage}/>
        <Flex flex='1' direction='column' justify='space-between' padding='28px'>
            <VStack gap="18px" divider={<StackDivider borderColor="orange.500"/>} >
                <Flex direction='column' justify='flex-start' width='100%' gap='12px'>
                        <Input
                        fontSize="16px"
                        height="131px"
                        borderRadius='12px'
                        placeholder="Escreva seu post..."
                        bg='gray.500'
                        _placeholder={{ color: "inherit", fontSize: "16px" }}
                        ></Input>
                    <Button variant='gradient'>Postar</Button>
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
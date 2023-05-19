import { CommentsNumber, Container, LikesDiv, LikesNumber, OwnerName, PostContent, ReactionIcon, ReactionsDiv } from "./style"
import likeIcon from '../../assets/likeIcon.png'
import dislikeIcon from '../../assets/dislikeIcon.png'
import commentIcon from '../../assets/commentIcon.png'
import { useNavigate } from "react-router-dom"
import { goToPostPage } from "../../routes/coordinator"

export const PostCard = ({isComment}) =>{
    const navigator = useNavigate()
    return(
        <Container>
            <OwnerName>Enviado por: labaluno83 </OwnerName>
            <PostContent>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</PostContent>
            <ReactionsDiv>
                <LikesDiv>
                    <ReactionIcon src={likeIcon} />
                    <LikesNumber>1.2k</LikesNumber>
                    <ReactionIcon src={dislikeIcon} />
                </LikesDiv>
                { isComment === false?
                <LikesDiv onClick={()=>goToPostPage(navigator, '1')}>
                    <ReactionIcon src={commentIcon} />
                    <CommentsNumber>163</CommentsNumber>
                </LikesDiv>:
                <></>
                }
            </ReactionsDiv>
        </Container>
    )
}
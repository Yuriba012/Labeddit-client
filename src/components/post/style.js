import styled from "styled-components";
import {theme} from "../../styles/theme"

export const Container = styled.article`
    min-height: 80px;
    background-color: ${theme.colors.gray['100']};
    width: 100%;
    border: 2px solid ${theme.colors.gray['300']};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    padding: 12px;
    gap:12px;
`

export const OwnerName = styled.p`
    font-size: 12px;
    color: ${theme.colors.gray['700']};
`
export const PostContent = styled.h3`
    font-size: 18px;
    color: ${theme.colors.gray['900']};
`
export const ReactionsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 12px;
`
export const LikesDiv = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid ${theme.colors.gray['300']};
    border-radius: 16px;
    gap: 12px;
    align-items: center;
`

export const ReactionIcon = styled.img`
    height: 18px;
    cursor: pointer;
`

export const LikesNumber = styled.p`
    font-size: 10px;
    font-weight: 700;
    color: ${theme.colors.gray['700']};
`
export const CommentsNumber = styled.p`
    font-size: 10px;
    color: ${theme.colors.gray['700']};
`


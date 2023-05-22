import { likeComment, likePost, deleteComment, deletePost, editComment, editPost } from "./apiReq";

export const like = async (isComment, id, value, setErrorMessage, setSuccessMessage) => {
    let response;
if(isComment){
    try {
        response = await likeComment(localStorage.getItem("tokenLabeddit"), id, value)
        setSuccessMessage(response)            
    } catch (error) {
        console.log(error.response.data)
        setErrorMessage(error.response.data)
    }
} else{
    try {
        response = await likePost(localStorage.getItem("tokenLabeddit"), id, value)
        setSuccessMessage(response)            
    } catch (error) {
        setErrorMessage(error.response.data)
    }
}
}

export const deleteItem = async (isComment, id, setErrorMessage, setSuccessMessage) => {
    let response;
if(isComment){
    try {
        response = await deleteComment(localStorage.getItem("tokenLabeddit"), id)
        setSuccessMessage(response)            
    } catch (error) {
        console.log(error.response.data)
        setErrorMessage(error.response.data)
    }
} else{
    try {
        response = await deletePost(localStorage.getItem("tokenLabeddit"), id)
        setSuccessMessage(response)            
    } catch (error) {
        setErrorMessage(error.response.data)
    }
}
}

export const editItem = async (isComment, id, newContent, setErrorMessage, setSuccessMessage) => {
    let response;
if(isComment){
    try {
        response = await editComment(localStorage.getItem("tokenLabeddit"), id, newContent)
        setSuccessMessage(response)            
    } catch (error) {
        console.log(error.response.data)
        setErrorMessage(error.response.data)
    }
} else{
    try {
        response = await editPost(localStorage.getItem("tokenLabeddit"), id, newContent)
        setSuccessMessage(response)            
    } catch (error) {
        setErrorMessage(error.response.data)
    }
}
}
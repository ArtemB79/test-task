import { Box, Stack } from "@mui/material"
import { useContext, useEffect, useState } from "react"

import { IPost } from "../post"
import { getAllPosts } from "../services"

import { SnackbarContext } from "./SnackbarContext";
import { Post } from "./Post";
import { Header } from "./Header";

export const Home = ()=>{
    const {showSnackbar} = useContext(SnackbarContext)
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect( ()=>{
        (async function(){
            const data =  await getAllPosts()
            if(typeof data === 'string'){
                showSnackbar('error',data)
        
            }else{
                setPosts(data)
            }
        })()
    },[showSnackbar])

    return <Box>
        <Header />
        <Stack sx={{
            display: 'flex',
            padding: '65px 30px 30px 30px',
            flexDirection:'row',
            flexWrap: 'wrap',
            gap:'20px'}}>
            {posts?.map(item=>(
                <Post key={item.id} post={item} />
            ))}
        </Stack>
    </Box>
}
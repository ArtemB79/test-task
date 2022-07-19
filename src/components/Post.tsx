import { Card, CardActionArea, CardContent, Typography } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { IPost } from "../post"

export const  Post:FC<{post: IPost}> = ({post}) =>{
    const navigate = useNavigate()
    return (
        <Card 
            onClick={()=> navigate(`/details/${post.id}`)} 
            sx={{ maxWidth: 345,}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {post.title.toUpperCase()}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                      {post.body}
                     </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
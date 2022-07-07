import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import { RoutesEnum } from "../routes"
import { createPost } from "../services"
import { Form } from "./Form"

export const CreateForm = ()=>{
    const navigate = useNavigate()

    const handleSubmit = async (title:string, description: string)=>{
        const result = await createPost({title, description})

        if(typeof result === 'string'){
            console.log('res', result)
            return
        }

        navigate(RoutesEnum.home)
    }

    return (
        <Box>
           <Box sx={{
            height: '50px',
            width:'100%',
            padding:'5px',
            backgroundColor:'blue',
            position:'fixed',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            zIndex:'999'
            }}>
                <Typography 
                    component="div"
                    color='white'
                    variant="h4">
                    Create Post
                </Typography>
                <Button 
                    onClick={()=> navigate(RoutesEnum.home)}
                    sx={{marginRight:'15px'}}
                    variant="contained" >
                    Back to all Posts
                </Button>
            </Box>
        <Form onSave={handleSubmit} />
    </Box>
    )
    
    
}
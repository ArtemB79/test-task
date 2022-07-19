import { Box,  } from "@mui/material"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { RoutesEnum } from "../routes"
import { createPost } from "../services"
import { Form } from "./Form"
import { Header } from "./Header"
import { SnackbarContext } from "./SnackbarContext"

export const CreateForm = ()=>{
    const { showSnackbar } = useContext(SnackbarContext)
    const navigate = useNavigate()

    const handleSubmit = async (title:string, description: string)=>{
        const result = await createPost({title, description})

        if(typeof result === 'string'){
            showSnackbar('error', result)
            return
        }
        showSnackbar('success', 'Created new post')
        navigate(RoutesEnum.home)
    }

    return (
        <Box>
            <Header />
        <Form onSave={handleSubmit} />
    </Box>
    )
    
    
}
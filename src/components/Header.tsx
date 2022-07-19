import { Button, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/system"
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesEnum } from "../routes";

const TITLE = new Map([
        [RoutesEnum.create, "Create Post"],
        [RoutesEnum.home,"Total Posts"],
        ['default', 'Post']
])

export const Header =() =>{
const navigate = useNavigate()
const {pathname} = useLocation()

const title = TITLE.get(pathname) || TITLE.get('default')

const handleClick = ()=>{
    const path = pathname === RoutesEnum.home ? RoutesEnum.create : RoutesEnum.home
    navigate(path)
}
    return (
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
                  {title}
                </Typography>
                <Button 
                    onClick={()=> handleClick()}
                    sx={{marginRight:'15px'}}
                    variant="contained" 
                    startIcon={<AddIcon />}>
                  {pathname === RoutesEnum.home ? "Create" : "Back to all Posts"}
                </Button>
        </Box>
    )
}

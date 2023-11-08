import { Send } from '@mui/icons-material'
import { Box, Button, IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'

const Chat = () => {
    return (
        <Box
            bgcolor='white'
            display='flex'
            width={400}
            height={400}
            p={2}

            sx={{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
            
        >
            <Button variant='contained' sx={{ alignSelf:'center'}}>
                Community
            </Button>

            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "calc(100%-20px)" }}
            >
                
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Type your message here"
                    inputProps={{ 'aria-label': 'Type your message here' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="send">
                    <Send />
                </IconButton>
                
            </Paper>
        </Box>
    )
}

export default Chat
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chat from '../Chat'



const Leccion = () => {
    const [chatVisible, setChatVisible] = useState(false)

    return (
        <>
            <Box
                bgcolor='gray'
                sx={{
                    width: "calc(100% - 5px)",
                    height: 650
                }}
                display='flex'
                flexDirection='column'
                alignSelf='center'
                px={5}
                gap={1}
            >
                <Box
                    display='flex'
                    // justifyContent='space-around'
                    p={1}
                    gap={5}
                >
                    <Box
                        bgcolor='white'
                        justifyContent='center'
                        sx={{
                            width: 100,
                            height: 20
                        }}
                    >
                        Leccion 1
                    </Box>

                    <Button variant='contained' color='primary' onClick={() => setChatVisible(!chatVisible)} sx={{justifySelf: 'flex-end'}}>
                        Community
                    </Button>
                    

                </Box>
                {
                        chatVisible && <Chat />
                    }

                <Box
                    bgcolor='white'
                    p={3}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec eros eu urna cursus venenatis. Suspendisse potenti. Nullam consequat, odio ac interdum vestibulum, velit mi vehicula libero, et scelerisque risus mi a erat. Sed auctor dui in cursus iaculis. Integer quis condimentum est. Duis vel lacinia arcu. Sed eleifend justo ac sapien ultrices, id tincidunt tortor aliquet. Suspendisse varius nunc nec lacus efficitur, a vehicula dolor gravida. Vivamus semper dui quis malesuada.

                </Box>
            </Box>
        </>
    )
}

export default Leccion
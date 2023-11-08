import { Send } from '@mui/icons-material'
import {
	Box,
	IconButton,
	InputBase,
	Paper,
	Toolbar,
	Typography,
} from '@mui/material'
import React, { useState } from 'react'
import ScrollableFeed from 'react-scrollable-feed'
import './styles.css'

const MOCKED_MESSAGES = [
	{
		name: 'Usuario 1',
		content: 'Mensaje 1',
	},
	{
		name: 'Usuario 2',
		content: 'Mensaje 2',
	},
	{
		name: 'Yo',
		content:
			'Mensaje 3',
		me: true,
	},
]

const Chat = () => {
	const [messages, setMessages] = useState(MOCKED_MESSAGES)
	const [message, setMessage] = useState('')

	const addMessage = event => {
		event.preventDefault()
		if (message.length === 0) return

		setMessages(messages => [
			...messages,
			{
				name: 'Bryan',
				content: message,
				me: true,
			},
		])
		setMessage('')
	}

	return (
		<Box
			width={400}
			p={2}
			pt={0}
			maxHeight='100%'
			position='fixed'
			right={0}
			top={0}
			bottom={0}
			display='flex'
			flexDirection='column'
			bgcolor='grey.200'
			gap={2}
		>
			<Toolbar />
			<Typography
				variant='h6'
				component='h2'
			>
				Community
			</Typography>
			<ScrollableFeed className='scroll-container'>
				{messages.map(message => (
					<Box
						bgcolor='white'
						p={2}
						sx={{
							borderRadius: 3,
						}}
					>
						<Typography
							fontWeight='bold'
							color='secondary'
							sx={{
								wordBreak: 'break-word',
							}}
						>
							{message.name}
						</Typography>
						<Typography
							sx={{
								wordBreak: 'break-word',
							}}
						>
							{message.content}
						</Typography>
					</Box>
				))}
			</ScrollableFeed>
			<Paper
				component='form'
				onSubmit={addMessage}
				sx={{
					p: '2px 4px',
					display: 'flex',
					alignItems: 'center',
					width: 'calc(100%-20px)',
				}}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder='Type your message here'
					inputProps={{ 'aria-label': 'Type your message here' }}
					value={message}
					onChange={event => setMessage(event.target.value)}
				/>
				<IconButton
					type='submit'
					sx={{ p: '10px' }}
					aria-label='send'
				>
					<Send />
				</IconButton>
			</Paper>
		</Box>
	)
}

export default Chat

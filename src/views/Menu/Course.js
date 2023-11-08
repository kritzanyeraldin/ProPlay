import React from 'react'
import { Box, Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'

const Course = ({ course, onStartClick, onPracticeClick, onDeleteClick }) => {
	const courseContainerStyle = {
		width: '250px',
		margin: '10px',
		display: 'inline-block',
	}

	const roundedBoxStyle = {
		border: '1px solid #ccc',
		borderRadius: '10px',
		padding: '10px',
		position: 'relative',
	}

	const imageStyle = {
		width: '200px',
		height: '200px',
	}

	const buttonStyle = {
		margin: '5px',
		variant: 'contained',
		color: 'black',
		backgroundColor: 'grey',
	}

	const deleteButtonStyle = {
		position: 'absolute',
		top: '5px',
		right: '5px',
		backgroundColor: 'grey',
		variant: 'contained',
		color: 'white',
	}

	return (
		<Box
			key={course.id}
			style={courseContainerStyle}
		>
			<Box
				style={roundedBoxStyle}
				className='course-container'
			>
				<IconButton
					style={deleteButtonStyle}
					onClick={() => onDeleteClick(course.id)}
				>
					<DeleteIcon />
				</IconButton>
				<img
					src={course.image}
					style={imageStyle}
					alt={`Curso ${course.name}`}
				/>
				<Button
					style={buttonStyle}
					LinkComponent={Link}
					to='/languages/lesson'
				>
					Iniciar
				</Button>
				<Button
					style={buttonStyle}
					onClick={() => onPracticeClick(course.id)}
				>
					Practicar
				</Button>
			</Box>
		</Box>
	)
}

export default Course

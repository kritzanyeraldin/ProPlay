import React, { useState } from 'react'
import {
	Box,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Button,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'

const language = {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
    title: "Python",
    width: "30%",
  }


const Description = () => {

	const [expanded, setExpanded] = useState(false)

	const handleAccordionChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}

	const buttonStyle = {
		margin: '5px',
		variant: 'contained',
		color: '#000000DE',
		backgroundColor: '#9E9E9E',
	}

	const imageStyle = {
		width: '400px',
		height: '400px',
	}

	return (
		<>
			<Box
				display='flex'
				justifyContent='space-between'
			>
				<Box width='50%'>
					<Button
						variant='outlined'
						color='primary'
						style={buttonStyle}
						LinkComponent={Link}
						to='/languages'
					>
						Volver
					</Button>
					<Typography variant='h5'>{language.title}</Typography>
					<img
						src={language.url}
						alt={`Lenguaje: ${language.title}`}
						style={imageStyle}
					/>
					<Typography variant='body1'>{language.description}</Typography>
				</Box>
				<Box width='50%'>
					<Typography variant='h5'>Details</Typography>
					<Accordion
						expanded={expanded === 'panel1'}
						onChange={handleAccordionChange('panel1')}
					>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Nivel Básico</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>Contenido del nivel básico</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === 'panel2'}
						onChange={handleAccordionChange('panel2')}
					>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Nivel Intermedio</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>Contenido del nivel intermedio</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === 'panel3'}
						onChange={handleAccordionChange('panel3')}
					>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Nivel Avanzado</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>Contenido del nivel avanzado</Typography>
						</AccordionDetails>
					</Accordion>
				</Box>
			</Box>
			<Button
				variant='contained'
				color='secondary'
				LinkComponent={Link}
				to='/languages/lesson'
			>
				Iniciar
			</Button>
		</>
	)
}

export default Description

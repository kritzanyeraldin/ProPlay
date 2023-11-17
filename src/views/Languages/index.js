import React, { useState } from "react";
import { Box, Button, ButtonBase, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { Image, ImageBackdrop, ImageButton, ImageMarked, ImageSrc } from "./styledComponents";

const languages = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
    title: "Python",
    width: "30%",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    title: "JavaScript",
    width: "30%",
  },
];



const Languages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const showDescriptionHandler = (language) => {
    setSelectedLanguage(language);
  };

  const hideDescriptionHandler = () => {
    setSelectedLanguage(null);
  };

  // const languages = [
  // 	{
  // 		id: 1,
  // 		name: 'Python',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
  // 	},
  // 	{
  // 		id: 2,
  // 		name: 'JavaScript',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  // 	},
  // 	{
  // 		id: 3,
  // 		name: 'Python',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
  // 	},
  // 	{
  // 		id: 4,
  // 		name: 'JavaScript',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  // 	},
  // 	{
  // 		id: 5,
  // 		name: 'Python',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
  // 	},
  // 	{
  // 		id: 6,
  // 		name: 'JavaScript',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  // 	},
  // 	{
  // 		id: 7,
  // 		name: 'Python',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
  // 	},
  // 	{
  // 		id: 8,
  // 		name: 'JavaScript',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  // 	},
  // 	{
  // 		id: 9,
  // 		name: 'Python',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
  // 	},
  // 	{
  // 		id: 10,
  // 		name: 'JavaScript',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  // 	},
  // 	{
  // 		id: 11,
  // 		name: 'Python',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
  // 	},
  // 	{
  // 		id: 12,
  // 		name: 'JavaScript',
  // 		language:
  // 			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  // 	},
  // 	// Agrega más lenguajes según sea necesario
  //

  // const languageBoxStyle = {
  // 	width: '250px', // Ajusta el ancho de cada caja
  // 	border: '1px solid #ccc',
  // 	borderRadius: '10px',
  // 	padding: '10px',
  // 	margin: '10px',
  // 	textAlign: 'center',
  // }

  // const imageStyle = {
  // 	width: '200px',
  // 	height: '200px',
  // }

  // const h2Style = {
  // 	textAlign: 'center', // Centrar horizontalmente el h2
  // }

  // const buttonStyle = {
  // 	margin: '5px',
  // 	variant: 'contained',
  // 	color: '#000000DE',
  // 	backgroundColor: '#9E9E9E',
  // }

  return (
    <>
      {/* {selectedLanguage ? (
				<Description
					language={selectedLanguage}
					onClose={hideDescriptionHandler}
				/>
			) : (
				<div>
					<h2 style={h2Style}>¿Qué lenguaje deseas aprender?</h2>
					<Box
						display='flex'
						flexWrap='wrap'
					>
						{languages.map(language => (
							<Box
								key={language.id}
								style={languageBoxStyle}
							>
								<img
									src={language.language}
									alt={`Lenguaje: ${language.name}`}
									style={imageStyle}
								/>
								<Button
									style={buttonStyle}
									onClick={() => showDescriptionHandler(language)}
								>
									Ver más
								</Button>
							</Box>
						))}
					</Box>
				</div>
			)} */}
      {/* {selectedLanguage ? (
        <Description
          language={selectedLanguage}
          onClose={hideDescriptionHandler}
        />
      ) : ( */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
            gap: 2,
          }}
        >
          {languages.map((language) => (
            <ImageButton
              focusRipple
              key={language.title}
              sx={{
                width: language.width,
              }}
              LinkComponent={Link}
              to='/languages/description'
              // onClick={() => showDescriptionHandler(language)}
            >
              <ImageSrc sx={{ backgroundImage: `url(${language.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {language.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
  
    </>
  );
};

export default Languages;

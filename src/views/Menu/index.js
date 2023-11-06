import React from 'react';

const Menu = () => {
  const courses = [
    {
      id: 1,
      name: 'Python',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
    },
    {
      id: 2,
      name: 'JavaScript',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    },
    // Agrega más cursos según sea necesario
  ];

  const courseContainerStyle = {
    width: '250px',
    margin: '10px',
    display: 'inline-block',
  };

  const roundedBoxStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    position: 'relative',
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
  };

  const buttonStyle = {
    margin: '5px',
  };

  const deleteButtonStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
  };

  const handleStartClick = (courseId) => {
    console.log(`Iniciando el curso ${courseId}`);
  };

  const handlePracticeClick = (courseId) => {
    console.log(`Practicando el curso ${courseId}`);
  };

  const handleDeleteClick = (courseId) => {
    console.log(`Eliminando el curso ${courseId}`);
  };

  return (
    <div className="course-menu">
      <h2>Mis Cursos</h2>
      {courses.map((course) => (
        <div key={course.id} style={courseContainerStyle}>
          <div style={roundedBoxStyle} className="course-container">
            <button style={deleteButtonStyle} onClick={() => handleDeleteClick(course.id)}>
              X
            </button>
            <img src={course.image} style={imageStyle} alt={`Curso ${course.name}`} />
            <button style={buttonStyle} onClick={() => handleStartClick(course.id)}>
              Iniciar
            </button>
            <button style={buttonStyle} onClick={() => handlePracticeClick(course.id)}>
              Practicar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

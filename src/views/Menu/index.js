import React from 'react';
import Course from './Course'; // Importa el componente Course

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
        <Course
          key={course.id}
          course={course}
          onStartClick={handleStartClick}
          onPracticeClick={handlePracticeClick}
          onDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  );
};

export default Menu;

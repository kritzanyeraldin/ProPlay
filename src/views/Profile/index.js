import React from 'react';

const Profile = () => {
  const columnStyle = {
    display: 'flex',
    width: '80%', 
    height: '80vh', 
    justifyContent: 'space-around',
  };

  const roundedBoxStyle = {
    width: '90%', 
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
  };

  return (
    <div style={columnStyle} className="profile-container">
      <div className="column" style={columnStyle}>
        <div style={roundedBoxStyle} className="user-info">
          <div className="user-avatar">
            {/* Aquí puedes mostrar la foto del usuario */}
            <img src="https://www.munichurcampa.gob.pe/wp-content/uploads/2023/01/1665282759496710_c5_720x720.jpeg" 
            alt="Avatar" 
            style={{
					maxWidth: 150,
				}} 
            />
          </div>
          <div className="user-details">
            <p>User: Nombre del usuario</p>
            <p>Email: correo@ejemplo.com</p>
          </div>
          <button>Editar</button>
        </div>
      </div>
      <div className="column" style={columnStyle}>
        <div style={roundedBoxStyle} className="user-preferences">
          <h2>Mis Preferencias</h2>
          <ul>
            <li>Opción 1</li>
            <li>Opción 2</li>
            <li>Opción 3</li>
          </ul>
          <button>Actualizar</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

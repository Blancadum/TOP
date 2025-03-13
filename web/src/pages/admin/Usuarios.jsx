import { useEffect, useState } from "react";
import usuariosData from "../../../../api/data/users.json"; 

function Home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
   
    setUsuarios(usuariosData || []);
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map((user) => (
          <li key={user._id}>{user.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
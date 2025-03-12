import { useEffect, useState } from "react";
import { obtenerUsuarios } from "../../api/users";

function Home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerUsuarios();
      setUsuarios(data || []);
    };

    fetchData();
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
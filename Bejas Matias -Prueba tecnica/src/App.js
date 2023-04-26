import React, { useState } from "react";
import Formulario from "./componentes/Formulario";
import Lista from "./componentes/Lista";
import "./styles.css";

 function App() {
  const [tareas, setTareas] = useState([]);

  const handleDeleteTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const handleEditTarea = (index, tareaActualizada) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index] = tareaActualizada;
    setTareas(nuevasTareas);
  };

  const handleAddTarea = (titulo, descripcion) => {
    const newTarea = {
      id: Math.random(),
      titulo: titulo,
      descripcion: descripcion,
    };

    setTareas([...tareas, newTarea]);
  };

  return (
    <div className="contenedor-gradiente">
      <h1 className="titulo"> Prueba técnica - React.js </h1>
      <h2 className="nombre-app"> ORGANIZADOR DE TAREAS </h2>

      <p className="texto-descriptivo">
        Espero esta aplicación te ayude con la organización de tu día a día. ¡Un
        gusto tenerte aquí!
      </p>
      <Formulario onAddTarea={handleAddTarea} />
      <Lista
        tareas={tareas}
        onDeleteTarea={handleDeleteTarea}
        onEditTarea={handleEditTarea}
      />
    </div>
  );
}
export default App;
import React, { useState } from "react";

// Creo un componente funcional para mostrar una lista de tareas cargadas por usuarios

function Lista({ tareas, onDeleteTarea, onEditTarea, setTareas }) {
  const [tareaEditando, setTareaEditando] = useState(-1);
  const [camposCompletos, setCamposCompletos] = useState(false);
  const [tareasCompletadas, setTareasCompletadas] = useState([]);

  const handleEditarClick = (index) => {
    setTareaEditando(index);
  };

  const handleGuardarClick = (index, tareaActualizada) => {
    onEditTarea(index, tareaActualizada);
    setTareaEditando(-1);
    setTareas(tareas);
  };

  const handleTituloChange = (event, tarea) => {
    setCamposCompletos(event.target.value && tarea.descripcion);
  };

  const handleDescripcionChange = (event, tarea) => {
    setCamposCompletos(tarea.titulo && event.target.value);
  };

  const handleTareaCompletada = (index) => {
    const nuevasTareasCompletadas = [...tareasCompletadas];
    nuevasTareasCompletadas[index] = !nuevasTareasCompletadas[index];
    setTareasCompletadas(nuevasTareasCompletadas);
  };

  return (
    <div className="tareas-container">
      {tareas.map((tarea, index) => (
        <div key={index}>
          {tareaEditando === index ? (
            <div className="contenedor-lista-modificacion">
              <h3 className="titulo-modificacion"> ESPACIO DE EDICIÓN </h3>
              <p className="edicion-tarea"> Ingrese su tarea modificada </p>
              <input
                className="entrada-datos-modificados"
                type="text"
                value={tarea.titulo}
                onChange={(event) => {
                  onEditTarea(index, { ...tarea, titulo: event.target.value });
                  handleTituloChange(event, tarea);
                }}
              />
              <p className="edicion-descripcion">
                {" "}
                Ingrese su descripción modificada{" "}
              </p>
              <input
                className="entrada-datos-modificados"
                value={tarea.descripcion}
                onChange={(event) => {
                  onEditTarea(index, {
                    ...tarea,
                    descripcion: event.target.value,
                  });
                  handleDescripcionChange(event, tarea);
                }}
              />
              <button
                className="guardar-boton"
                onClick={() =>
                  camposCompletos && handleGuardarClick(index, tarea)
                }
              >
                {" "}
                Guardar{" "}
              </button>
            </div>
          ) : (
            <div className="lista-tarjeta">
              <h2 className="titulo-tarea"> {tarea.titulo} </h2>
              <p className="descripcion-tarea"> {tarea.descripcion} </p>
              <div className="botones-lista">
                <button
                  className="modificar-button"
                  onClick={() => handleEditarClick(index)}
                >
                  {" "}
                  Modificar{" "}
                </button>
                <button
                  className="eliminar-button"
                  onClick={() => onDeleteTarea(index)}
                >
                  {" "}
                  Eliminar{" "}
                </button>
                <input
                  className="boton-check"
                  type="checkbox"
                  onChange={() => handleTareaCompletada(index)}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Lista;
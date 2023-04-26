import React, { useState } from "react";

function Formulario(props) {
  const [tituloTarea, setTituloTarea] = useState("");
  const [descripcionTarea, setDescripcionTarea] = useState("");
  const [disableAddButton, setDisableAddButton] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validacion de campos
    if (!tituloTarea.trim() || !descripcionTarea.trim()) {
      return;
    }

    // Se resetean los campos
    props.onAddTarea(tituloTarea, descripcionTarea);
    setTituloTarea("");
    setDescripcionTarea("");
    setDisableAddButton(true);
  };

  const handleInputChange = (event) => {
    if (event.target.name === "tituloTarea") {
      setTituloTarea(event.target.value);
    } else if (event.target.name === "descripcionTarea") {
      setDescripcionTarea(event.target.value);
    }
    if (!tituloTarea.trim() || !descripcionTarea.trim()) {
      setDisableAddButton(true);
    } else {
      setDisableAddButton(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="titulo-tarea"> Tarea </div>

      <input
        className="entrada-datos"
        type="text"
        name="tituloTarea"
        value={tituloTarea}
        onChange={handleInputChange}
      />

      <p className="descripcion-tarea"> Descripción </p>

      <input
        className="entrada-datos"
        name="descripcionTarea"
        value={descripcionTarea}
        onChange={handleInputChange}
      />

      <button className="form-button" type="submit" disabled={disableAddButton}>
        Agregar
      </button>
    </form>
  );
}
export default Formulario;
// IngredientForm.js
import React, { useState } from 'react';

const IngredientForm = ({ onSubmit, onCancel, categories }) => {
  const [formData, setFormData] = useState({
    // Define tus campos de formulario aquí
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Formulario de Ingrediente</h2>
      <form onSubmit={handleSubmit}>
        {/* Renderiza tus campos de formulario aquí */}
        <button type="submit">Guardar</button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default IngredientForm;

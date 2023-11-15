import React, { useState } from 'react';
import IngredientList from './components/IngredientList';
import IngredientForm from './components/IngredientForm';

const App = () => {
  const [ingredients, setIngredients] = useState([]); // Tu array de ingredientes

  const handleEdit = (ingredientId) => {
    // Implementa la lógica para la edición del ingrediente aquí
  };

  const handleAdd = (newIngredient) => {
    // Implementa la lógica para agregar un nuevo ingrediente aquí
  };

  return (
    <div>
      <IngredientList ingredients={ingredients} onEdit={handleEdit} />
      <IngredientForm onSubmit={handleAdd} />
    </div>
  );
};

export default App;

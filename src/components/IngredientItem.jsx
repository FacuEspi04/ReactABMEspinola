// IngredientItem.js
import React from 'react';

const IngredientItem = ({ ingredient, onEdit }) => {
  return (
    <tr>
      <td>{ingredient.name}</td>
      {/* Renderiza otros campos aquí */}
      <td>
        <button onClick={onEdit}>Editar</button>
      </td>
    </tr>
  );
};

export default IngredientItem;

// IngredientList.js
import React from 'react';
import IngredientItem from './IngredientItem';

const IngredientList = ({ ingredients, onEdit }) => {
  return (
    <div>
      <h2>Lista de Ingredientes</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rubro</th>
            <th>Precio de Costo</th>
            <th>Stock Mínimo</th>
            <th>Stock Actual</th>
            <th>Unidad de Medida</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient) => (
            <IngredientItem
              key={ingredient.id}
              ingredient={ingredient}
              onEdit={() => onEdit(ingredient.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientList;

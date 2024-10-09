import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]); // Unique ID hinzufügen + neue Farbe am Anfang
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onSubmitColor={handleAddColor} />

      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;

/*

- Statisch - Farben werden nur einmal beim Laden der Seite aus initialColors geladen (wird nicht aktualisiert)
- Farben können nicht geändert werden, weil sie nicht in einem Zustand (state) gespeichert sind

return (
  <>
    <h1>Theme Creator</h1>

    {initialColors.map((color) => {
      return <Color key={color.id} color={color} />;
    })}
  </>
);
}

*/

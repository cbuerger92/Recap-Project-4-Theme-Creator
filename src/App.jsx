import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  async function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]); // Neue Farbe am Anfang hinzufügen
  }

  async function handleUpdateColor(id, updateColor) {
    setColors(
      colors.map((color) =>
        color.id === id ? { ...color, ...updateColor } : color
      )
    );
  }

  function handleDeleteColor(id) {
    setColors(colors.filter((color) => color.id !== id)); // Entfernt Farbe
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />

      {colors.length === 0 ? (
        <p>No colors. Start by adding one!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor}
            onUpdate={handleUpdateColor}
          />
        ))
      )}
    </>
  );
}

export default App;

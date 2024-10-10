import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onDelete, onUpdate }) {
  const [showConfirm, setShowConfirm] = useState(false); // State für Confirm
  const [isEditing, setIsEditing] = useState(false); // State für Update

  // Funktion zum löschen
  function handleDelete() {
    setShowConfirm(true); // Bestätigungsnachricht anzeigen
  }

  function confirmDelete() {
    onDelete(color.id); // Farbe löschen
    setShowConfirm(false); // Bestätigungsnachricht ausblenden
  }

  function cancelDelete() {
    setShowConfirm(false); // Bestätigungsnachricht ausblenden
  }

  // Funktion zum Aktualisieren der Farbe
  function handleUpdateColor(updateColor) {
    onUpdate(color.id, updateColor); // Update übergeben
    setIsEditing(false); // Edit Modus schließen
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {isEditing ? ( // Wenn im Edit Modus
        <>
          <ColorForm
            onSubmitColor={handleUpdateColor} // Funktion zum Aktualisieren übergeben
            initialData={color} // Übergabe der aktuellen Daten
            isEditing={isEditing} // Übergabe des Modus
          />
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
        </>
      )}

      <div className="button-container">
        {!showConfirm && !isEditing ? ( // Wenn weder die Bestätigung noch der Edit-Modus angezeigt wird
          <>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </>
        ) : showConfirm ? ( // Wenn Bestätigungsmodus angezeigt wird
          <>
            <div className="color-card-highlight">
              <p>Really delete?</p>
            </div>
            <button onClick={cancelDelete}>Cancel</button>
            <button onClick={confirmDelete}>Delete</button>
          </>
        ) : null}
      </div>
    </div>
  );
}

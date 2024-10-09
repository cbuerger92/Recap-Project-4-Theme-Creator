import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

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

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      <div className="button-container">
        {/* Zeigt den "Delete"-Button an, wenn die Bestätigung nicht angezeigt wird */}
        {!showConfirm ? (
          <button onClick={handleDelete}>Delete</button>
        ) : (
          <>
            <div className="color-card-highlight">
              <p>Really delete?</p>
            </div>
            {/* "Cancel"-Button links und "Delete"-Button rechts */}
            <button onClick={cancelDelete}>Cancel</button>
            <button onClick={confirmDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

{
  /*

<button onClick={handleDelete}>Delete</button>

{showConfirm && (
  <div className="color-card-highlight">
    <p>Really delete?</p>
    <button onClick={confirmDelete}>Delete</button>{" "}
    <button onClick={cancelDelete}>Cancel</button>{" "}
  </div>
  */
}

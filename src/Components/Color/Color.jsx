import { useState, useEffect } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";

// Funktion zur Bestimmung der Farbe

function getColorForScore(score) {
  if (score === "Yup") return { background: "green", text: "black" };
  if (score === "Kinda") return { background: "orange", text: "black" };
  if (score === "Nope") return { background: "red", text: "white" };
  return { background: "black", text: "white" }; // Standardfarbe
}

// Funktion zur Abfrage der API

async function postFetch(color) {
  const response = await fetch(
    "https://www.aremycolorsaccessible.com/api/are-they",
    {
      method: "POST",
      body: JSON.stringify({
        colors: [color.hex, color.contrastText], // Farben für den Kontrast überprüfen
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data; // API Daten zurückgeben
}

// Color-Komponente (Bestätigungsnachricht, Bearbeitungsmodus, Kontrastbewertungs-Score)

export default function Color({ color, onDelete, onUpdate }) {
  const [showConfirm, setShowConfirm] = useState(false); // State für Confirm
  const [isEditing, setIsEditing] = useState(false); // State für Update
  const [contrastScore, setContrastScore] = useState(null);

  // Kontrastwert bei der Initialisierung berechnen

  useEffect(() => {
    async function fetchContrastScore() {
      try {
        const contrastData = await postFetch(color); // API-Aufruf
        setContrastScore(contrastData.overall); // Kontrastwert speichern
      } catch (error) {
        console.error("Error fetching contrast score:", error);
      }
    }
    fetchContrastScore(); // Kontrastdaten abrufen
  }, [color]); // useEffect wird ausgelöst, wenn sich die Farbe ändert

  // Funktion zum Aktualisieren der Farbe

  async function handleUpdateColor(updateColor) {
    const newContrastData = await postFetch(updateColor); // API aufrufen
    console.log(newContrastData); // Antwort der API in der Konsole

    setContrastScore(newContrastData.Overall); // Kontrastwert aktualisieren

    onUpdate(color.id, {
      ...updateColor,
      contrastScore: newContrastData.Overall, // Gesamtwert speichern
    }); // Update übergeben

    setIsEditing(false); // Edit-Modus schließen
  }

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

  // Hier die Kontrastfarben bestimmen

  const { background, text } = getColorForScore(contrastScore); // Kontrastfarbe bestimmen

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
          <div
            className="contrast-score"
            style={{
              backgroundColor: background,
              color: text,
              padding: "5px 10px",
              borderRadius: "5px",
              display: "inline-block",
            }}
          >
            Overall Contrast Score {contrastScore}
          </div>
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

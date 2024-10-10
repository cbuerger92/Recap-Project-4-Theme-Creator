import ColorInput from "../ColorInput/ColorInput/";
import "./ColorForm.css";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" }, // initialen Werte für Formular
  isEditing = false, // neuer Prop der angibt ob sich das Formular im Bearbeitungsmodus befindet
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log("Test");
    onSubmitColor(data);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />
      {isEditing ? ( // Update Color Button nur im Bearbeitungsmodus
        <button type="submit">Update Color</button>
      ) : (
        <button type="submit">Add Color</button> // Add Color Button im normalen Modus
      )}
    </form>
  );
}

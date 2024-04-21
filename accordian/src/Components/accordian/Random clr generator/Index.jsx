import { useEffect, useState } from "react";

export default function RandomColour() {
  const [typeOfColor, SetTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (var i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * hex.length);
      hexColor += hex[random];
    }

    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor;
    else handleCreateRandomHexColor;
  }, [typeOfColor]);

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={() => SetTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => SetTypeOfColor("rgb")}>create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate color
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "40px",
          marginTop: "50px",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

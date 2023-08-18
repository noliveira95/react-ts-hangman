export function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {/* Top bar */}
      <div
        style={{
          height: "50px",
          width: "10px",
          backgroundColor: "black",
          top: "0",
          right: "0",
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      {/* Vertical bar */}
      <div
        style={{
          height: "300px",
          width: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      {/* Bottom bar */}
      <div
        style={{ height: "10px", width: "250px", backgroundColor: "black" }}
      ></div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
   <div
  style={{
    width: "200px",
    maxWidth: "100%",
    height: "100vh",
    background: "#2c3e50",
    padding: "20px"
  }}
>
      <h2 style={{ color: "white" }}>Clinic</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>
          <Link to="/" style={{ color: "white" }}>Dashboard</Link>
        </li>

        <li style={{ margin: "10px 0" }}>
          <Link to="/patients" style={{ color: "white" }}>Patients</Link>
        </li>
      </ul>
    </div>
  );
}
import { useState } from "react";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");

  const addPatient = () => {
    if (name === "") return;
    setPatients([...patients, name]);
    setName("");
  };

  const deletePatient = (index) => {
    const newList = patients.filter((_, i) => i !== index);
    setPatients(newList);
  };

  return (
   <div style={{ marginBottom: "20px" }}>
      <h1>Patients</h1>

      <input
        type="text"
        placeholder="Nom du patient"
        value={name}
        onChange={(e) => setName(e.target.value)}
      style={{ padding: "8px", width: "200px" }}
      />

      <button onClick={addPatient} style={{ padding: "8px 12px", marginLeft: "10px" }}>
        Ajouter
        </button>

      <ul>
        {patients.map((p, i) => (
          <li key={i}>
            {p}
            <button onClick={() => deletePatient(i)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
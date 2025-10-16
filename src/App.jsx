import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");
  const [totalCalories, setTotalCalories] = useState(null);
  const [remainingCalories, setRemainingCalories] = useState(null);

  const handleCalculate = () => {
    if (
      !name ||
      goal <= 0 ||
      breakfast < 0 ||
      lunch < 0 ||
      dinner < 0 ||
      snacks < 0 ||
      !goal ||
      !breakfast ||
      !lunch ||
      !dinner ||
      !snacks
    ) {
      alert("Please enter valid positive values for all fields!");
      return;
    }

    const total =
      Number(breakfast) + Number(lunch) + Number(dinner) + Number(snacks);
    const remaining = Number(goal) - total;

    setTotalCalories(total);
    setRemainingCalories(remaining);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto", fontFamily: "Poppins, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}> Calorie Tracker App</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Daily Calorie Goal" value={goal} onChange={(e) => setGoal(e.target.value)} />
        <input type="number" placeholder="Breakfast Calories" value={breakfast} onChange={(e) => setBreakfast(e.target.value)} />
        <input type="number" placeholder="Lunch Calories" value={lunch} onChange={(e) => setLunch(e.target.value)} />
        <input type="number" placeholder="Dinner Calories" value={dinner} onChange={(e) => setDinner(e.target.value)} />
        <input type="number" placeholder="Snacks Calories" value={snacks} onChange={(e) => setSnacks(e.target.value)} />

        <button onClick={handleCalculate} style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>
          Calculate Calories
        </button>
      </div>

      {totalCalories !== null && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>Results:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Daily Goal:</strong> {goal} kcal</p>
          <p><strong>Total Consumed:</strong> {totalCalories} kcal</p>
          <p>
            <strong>Remaining Calories:</strong>{" "}
            <span
              style={{
                color: remainingCalories < 0 ? "red" : "green",
                fontWeight: "bold",
              }}
            >
              {remainingCalories} kcal
            </span>
          </p>
          <p>
            {remainingCalories < 0
              ? " You exceeded your daily calorie goal!"
              : " You are within your daily goal!"}
          </p>
        </div>
      )}
    </div>
  );
}

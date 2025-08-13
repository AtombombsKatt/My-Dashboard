import { useState, useEffect } from "react";

type Activity = {
  id: string;
  name: string;
  amount: number;
  date: string;
};

export default function ActivityTracker() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // Ladda från localStorage när sidan öppnas
  useEffect(() => {
    const saved = localStorage.getItem("activities");
    if (saved) setActivities(JSON.parse(saved));
  }, []);

  // Spara varje gång activities ändras
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  function addActivity() {
    if (!name || !amount) return;
    const today = new Date().toLocaleDateString("sv-SE"); // t.ex. 2025-08-13
    const newActivity: Activity = {
      id: crypto.randomUUID(),
      name,
      amount: Number(amount),
      date: today,
    };
    setActivities((prev) => [...prev, newActivity]);
    setName("");
    setAmount("");
  }

  return (
    <div className="p-4 bg-white rounded shadow w-96">
      <h2 className="text-xl font-bold mb-4">Logga aktivitet</h2>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Aktivitet (t.ex. promenad)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        type="number"
        placeholder="Antal (t.ex. steg eller minuter)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={addActivity}
      >
        Lägg till
      </button>

      <ul className="mt-4">
        {activities.map((a) => (
          <li key={a.id} className="border-b py-2">
            <strong>{a.date}</strong>: {a.name} – {a.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

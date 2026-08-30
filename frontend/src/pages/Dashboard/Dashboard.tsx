import { useEffect, useState } from "react";
import api from "../../services/api";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await api.get("/health");

        setMessage(response.data.message);
      } catch (error) {
        console.error("Backend connection failed", error);
      }
    };

    checkBackend();
  }, []);

  return (
    <div>
      <h1>TradeGuard</h1>

      <p>Your personal trading analysis dashboard</p>

      <h2>Backend Status</h2>

      <p>
        {message || "Connecting to backend..."}
      </p>
    </div>
  );
};

export default Dashboard;
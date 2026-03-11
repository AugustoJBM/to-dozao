"use client";

import React from "react";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove o JWT
    router.push("/login"); // volta para a tela de login
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        gap: "20px"
      }}
    >
      <h1
        style={{
          color: "#333",
          fontFamily: "Arial, sans-serif",
          fontSize: "3rem"
        }}
      >
        Home
      </h1>

      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Sair
      </button>
    </div>
  );
}

export default Home;
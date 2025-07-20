"use client"; 

import Chatbot from "./components/chatbot.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main style={{ padding: "2rem" }} className="container py-4">
      <Chatbot />
    </main>
  );
}
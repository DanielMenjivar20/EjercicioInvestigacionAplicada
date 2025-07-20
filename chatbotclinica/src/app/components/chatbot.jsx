import React, { useState, useRef, useEffect } from "react";
import respuestas from "../data/respuestas.json"; 


const Chatbot = () => {
  const [mensaje, setMensaje] = useState("");
  const [historial, setHistorial] = useState([]);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [historial]);

  const manejarEnvio = (e) => {
    e.preventDefault();

    const entradaUsuario = mensaje.toLowerCase();
    let respuestaBot = "Lo siento, no entendí tu pregunta.";

    const buscarRespuesta = (categoria) => {
      for (const clave in respuestas[categoria]) {
        if (entradaUsuario.includes(clave)) {
          return respuestas[categoria][clave];
        }
      }
      return null;
    };

    for (const categoria in respuestas) {
      const respuesta = buscarRespuesta(categoria);
      if (respuesta) {
        respuestaBot = respuesta;
        break;
      }
    }

    setHistorial([
      ...historial,
      { remitente: "Usuario", texto: mensaje },
      { remitente: "Bot", texto: respuestaBot },
    ]);
    setMensaje("");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Asistente Médico Virtual</h2>
      <div
        ref={chatRef}
        className="border p-4 h-64 overflow-y-scroll bg-gray-100 rounded"
      >
        {historial.map((msg, index) => (
          <p key={index} className={`mb-2 ${msg.remitente === "Usuario" ? "text-right" : "text-left"}`}>
            <strong>{msg.remitente}:</strong> {msg.texto}
          </p>
        ))}
      </div>
      <form onSubmit={manejarEnvio} className="mt-4 flex">
        <input
          type="text"
          className="flex-1 border p-2 rounded-l"
          value={mensaje}
          placeholder="Escribe tu pregunta..."
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chatbot;

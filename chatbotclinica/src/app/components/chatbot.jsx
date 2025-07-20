import React, { useState, useRef, useEffect } from "react";
import respuestas from "../data/respuestas.json"; 
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container" style={{ maxWidth: 500 }}>
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h4 className="mb-0">🤖 Asistente Médico Virtual</h4>
        </div>
        <div
          ref={chatRef}
          className="card-body bg-light"
          style={{ height: "350px", overflowY: "auto" }}
        >
          {historial.length === 0 && (
            <div className="text-center text-muted my-5">
              <small>¡Hola! ¿En qué puedo ayudarte hoy?</small>
            </div>
          )}
          {historial.map((msg, index) => (
            <div
              key={index}
              className={`d-flex mb-3 ${msg.remitente === "Usuario" ? "justify-content-end" : "justify-content-start"}`}
            >
              <div
                className={`p-2 rounded 
                  ${msg.remitente === "Usuario" ? "bg-primary text-white" : "bg-white border"}`}
                style={{ maxWidth: "75%" }}
              >
                <strong>{msg.remitente === "Usuario" ? "Tú" : "Bot"}:</strong> {msg.texto}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={manejarEnvio} className="card-footer bg-white p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={mensaje}
              placeholder="Escribe tu pregunta..."
              onChange={(e) => setMensaje(e.target.value)}
              required
              autoFocus
            />
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;

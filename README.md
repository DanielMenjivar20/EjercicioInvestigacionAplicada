# EjercicioInvestigacionAplicada
[Acceder a la carpeta de chatbotclinica](https://github.com/DanielMenjivar20/EjercicioInvestigacionAplicada/tree/main/chatbotclinica)

## Pasos para instalar y ejecutar la aplicación

-Clona o descarga la carpeta del repositorio chatbotclinica.

-Abre la terminal dentro de esa carpeta.

-Instala las dependencias necesarias usando npm install

-Ejecutar la aplicación con comando npm run dev

-Una vez ejecutado solo accede a localhost:3000 desde un navegador para empezar a conversar con el chatbot

## Uso de Copilot

-Durante el proceso de desarrollo, un uso de la herramienta de apoyo fue

useEffect(() => {
  if (chatRef.current) {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }
}, [historial]);

## Ventaja

Se ahorro tiempo en ciertas partes al sugerir estructuras de efectos o diseños usando bootstrap sin tener que buscar en internet

## Reflexión crítica aplicada al caso de uso

Un riesgo claro del uso de copilot es el uso excesivo del mismo ya que se podria solo copiar y pegar código sin entenderlo realmente, 
en ocasiones copilot da respuestas erroneas como condiciones mal estructuradas

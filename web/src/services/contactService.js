export const sendContactForm = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || "Error al enviar el formulario.");
      }
  
      return { success: true, message: "Formulario enviado correctamente." };
    } catch (error) {
      return { success: false, message: error.message || "Error al enviar el formulario." };
    }
  };
  
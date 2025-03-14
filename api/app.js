const app = require("./app");  // Importar app.js
const mongoose = require("mongoose");
require("dotenv").config(); 

// Conectar con MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => {
    console.error("❌ Error de conexión a MongoDB:", err);
    process.exit(1);
  });

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor funcionando en el puerto ${PORT}`));

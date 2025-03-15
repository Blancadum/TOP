const app = require("./app");
const mongoose = require("mongoose"); 
require("dotenv").config(); 

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => {
    console.error("❌ Error de conexión a MongoDB:", err.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor funcionando en el puerto ${PORT}`));

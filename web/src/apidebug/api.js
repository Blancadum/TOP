import axios from "axios";

const API_TEST_URL = "http://localhost:5000/api/test";

export const checkApiHealth = async () => {
  try {
    const response = await axios.get(API_TEST_URL);
    console.log("✅ API funcionando:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ API caída o error en backend:", error);
    return null;
  }
};
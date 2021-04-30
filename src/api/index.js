import axios from "axios";

export async function getSomething() {
  try {
    console.log("run api/index");
    const { data } = await axios.get("/api/users/clients");
    return data;
  } catch (error) {
    throw error;
  }
}

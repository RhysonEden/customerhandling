import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api/clients/clients");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    console.log(username, "login starting");
    const { data } = await axios.post("/api/users/login", {
      username,
      password,
    });
    console.log("data", data);
    sessionStorage.setItem("change", data.user.change);
    sessionStorage.setItem("admin", data.user.admin);
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user", data.user.username);
    sessionStorage.setItem(
      "email",
      "guardianresourcecenter@guardianfueltech.com"
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function registerUser(username, password, email) {
  try {
    const { data } = await axios.post("/api/users/register", {
      username,
      password,
      email,
    });
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user", data.user.username);
    // sessionStorage.setItem("id", data.user.id);
    return data;
  } catch (error) {
    throw error;
  }
}

export default async function emailTotal(
  email,
  ticket,
  cfm,
  confinedSpace,
  blower,
  calibrationCan,
  calibrationTrailer,
  truckFee,
  waterTrailer,
  handPump,
  miscPrice,
  P1,
  laborTotal,
  travelRate,
  part,
  consumables,
  laptop,
  enviroment,
  disposalTotal,
  projectManagementTotal,
  standByTimeTotal,
  finalRate,
  nte,
  upliftAmount
) {
  try {
    const { data } = await axios.post("api/email/email", {
      email,
      ticket,
      cfm,
      confinedSpace,
      blower,
      calibrationCan,
      calibrationTrailer,
      truckFee,
      waterTrailer,
      handPump,
      miscPrice,
      P1,
      laborTotal,
      travelRate,
      part,
      consumables,
      laptop,
      enviroment,
      disposalTotal,
      projectManagementTotal,
      standByTimeTotal,
      finalRate,
      nte,
      upliftAmount,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function userUpdate(username, password, change) {
  try {
    console.log("change", change);
    const { data } = await axios.post("api/users/update", {
      username,
      password,
      change,
    });
    console.log("data", data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function adminUpdate(username, admin) {
  try {
    const { data } = await axios.post("api/users/admin", {
      username,
      admin,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserInfo() {
  try {
    const user = await axios.get("/api/users/getUserInfo", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function getAdminInfo(username) {
  try {
    const data = await axios.get(`/api/users/${username}`, {
      username,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

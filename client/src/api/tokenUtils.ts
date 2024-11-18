import { clientId } from "../services/Auth/userAuth";

export const getRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token") || "";

  if (!refreshToken) {
    console.error("Aucun refresh_token trouvé dans localStorage !");
    return;
  }
  const url = "https://accounts.spotify.com/api/token";

  const payload = {
    method: "POST",
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
    }),
  };

  const response = await fetch(url, payload);
  const data = await response.json();

  localStorage.setItem("access_token", data.access_token);
  if (data.refresh_token) {
    localStorage.setItem("refresh_token", data.refresh_token);
  }

  const expiresAT = Date.now() + data.expires_in * 1000;
  localStorage.setItem("expire_at", expiresAT.toString());
};

export const isTokenExpired = () => {
  const expiresAT = localStorage.getItem("expires_at");
  return !expiresAT || Date.now() > Number.parseInt(expiresAT);
};

export const checkRefreshToken = async () => {
  if (isTokenExpired()) {
    await getRefreshToken();
  }
};

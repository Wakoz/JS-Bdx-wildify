import { checkRefreshToken } from "./tokenUtils";

export const apiRequest = async (
  endpoint: string,
  option: RequestInit = {},
) => {
  await checkRefreshToken();

  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    console.error("Aucun access_token trouvé !");
    throw new Error("Token non disponible");
  }

  const headers = {
    ...option.headers,
    Authorization: `Bearer ${accessToken}`,
  };

  return fetch(`${import.meta.env.VITE_API_SPOTIFY}${endpoint}`, {
    ...option,
    headers,
  });
};

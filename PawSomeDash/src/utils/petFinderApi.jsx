const getAccessToken = async () => {
  const url = import.meta.env.VITE_TOKEN_URL;
  const params = {
    grant_type: "client_credentials",
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(params),
  });

  const data = await response.json();
  console.log(data);
  return data;
};

const getPets = async (accessToken) => {
  // Set the API endpoint and query parameters
  const endpoint = import.meta.env.VITE_ANIMALS_URL;
  const params = {
    limit: 100,
  };

  // Set the authentication headers
  const headers = {
    Authorization: `Bearer ${accessToken.access_token}`,
  };

  // Send the API request and handle the response
  const response = await fetch(endpoint + "?" + new URLSearchParams(params), {
    headers,
  });
  const data = await response.json();
  return data;
};

export { getAccessToken, getPets };

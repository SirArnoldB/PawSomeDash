import { getAccessToken, getPets } from "../utils/petFinderApi";

const fetchData = async () => {
  const accessToken = await getAccessToken();
  const petsData = await getPets(accessToken);
  return petsData.animals;
};

const petsData = await fetchData();

const getPet = (id) => {
  return petsData.find((pet) => pet.id === id);
};

export { petsData, getPet };

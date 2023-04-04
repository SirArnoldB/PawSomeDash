import { petsData } from "../routes/PetsData";
import { getGeoIds } from "./getGeoIds";

const ageData = {};
const breedsData = {};
const locationData = {};
const speciesData = {};
const cityData = {};

const GEOIDS = getGeoIds();

console.log(GEOIDS);
console.log(petsData);

const updatePetsData = () => {
  petsData.forEach((pet) => {
    ageData[pet.age] = ageData[pet.age] + 1 || 1;
    breedsData[pet.breeds.primary] = breedsData[pet.breeds.primary] + 1 || 1;
    locationData[pet.contact.address.state] =
      locationData[pet.contact.address.state] + 1 || 1;
    speciesData[pet.species] = speciesData[pet.species] + 1 || 1;
    cityData[pet.contact.address.city] =
      cityData[pet.contact.address.city] + 1 || 1;
  });
};

updatePetsData();

// convert objects to arrays of key-value pairs and map to array of objects
const ageChartData = Object.entries(ageData).map(([label, value]) => ({
  label,
  value,
}));
const breedsChartData = Object.entries(breedsData).map(([breed, count]) => ({
  breed,
  count,
}));
const locationChartData = Object.entries(locationData).map(
  ([state, count]) => ({
    state,
    count,
  })
);
const speciesChartData = Object.entries(speciesData).map(([label, value]) => ({
  label,
  value,
}));
const cityChartData = Object.entries(cityData).map(([label, value]) => ({
  label,
  value,
}));

export {
  ageChartData,
  breedsChartData,
  locationChartData,
  speciesChartData,
  cityChartData,
};

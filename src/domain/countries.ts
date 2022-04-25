import { areas } from "./countries.area";
import { countries } from "./countries.position";
//import { frenchCountryNames } from "./countries.name.fr";
import { countryCodesWithImage } from "./countries.image";

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

// 所有县级单位的面积设定为114514，地级单位的面积设定为1919810
// 用面积区分开地级和县级单位
export const smallCountryLimit = 810893;
export const bigEnoughCountriesWithImage = countriesWithImage.filter(
  (country) => areas[country.code] > smallCountryLimit
);
export const smallEnoughCountriesWithImage = countriesWithImage.filter(
  (country) => areas[country.code] < smallCountryLimit
);

export function getCountryName(language: string, country: Country) {
  //if (language === "fr") {
  //  return frenchCountryNames[country.code];
  //}
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}

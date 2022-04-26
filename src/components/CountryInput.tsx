import { t } from "i18next";
import React, { useState, useMemo } from "react";
import Autosuggest from "react-autosuggest";
import { useTranslation } from "react-i18next";
import { getCountryName, sanitizeCountryName } from "../domain/countries";
import { getSettings } from "../hooks/useSettings";
import { isUsingMode, useMode } from "../hooks/useMode";
import { getDayString } from "../hooks/useTodays";
import {
  bigEnoughCountriesWithImage,
  smallEnoughCountriesWithImage
} from "../domain/countries";

interface CountryInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  currentGuess: string;
  setCurrentGuess: (guess: string) => void;
}

export function CountryInput({
  inputRef,
  currentGuess,
  setCurrentGuess,
}: CountryInputProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const { i18n } = useTranslation();
  
  const settingsData = getSettings();

  const dayString = useMemo(
    () => getDayString(settingsData.shiftDayCount),
    [settingsData.shiftDayCount]
  );
  const countyMode = isUsingMode("countyMode", dayString);

  const countrySelection =
  countyMode
    ? smallEnoughCountriesWithImage
    : bigEnoughCountriesWithImage;

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={({ value }) =>
        setSuggestions(
          countrySelection
            .map((c) => getCountryName(i18n.resolvedLanguage, c).toUpperCase())
            .filter((countryName) =>
              sanitizeCountryName(countryName).includes(
                sanitizeCountryName(value)
              )
            )
        )
      }
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={(suggestion) => (
        <div className="m-0.5 bg-white dark:bg-slate-800 dark:text-slate-100 p-1">
          {suggestion}
        </div>
      )}
      containerProps={{
        className: "border-2 rounded flex-auto relative",
      }}
      inputProps={{
        ref: inputRef,
        className: "w-full dark:bg-slate-800 dark:text-slate-100 p-1",
        placeholder: t("placeholder"),
        value: currentGuess,
        onChange: (_e, { newValue }) => setCurrentGuess(newValue),
        autoFocus: true,
      }}
      renderSuggestionsContainer={({ containerProps, children }) => (
        <div
          {...containerProps}
          className={`${containerProps.className} rounded absolute bottom-full w-full bg-gray-300 dark:bg-white mb-1 divide-x-2 max-h-52 overflow-auto`}
        >
          {children}
        </div>
      )}
    />
  );
}

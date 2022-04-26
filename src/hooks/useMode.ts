/*
 * @Author: dx3906
 * @Date: 2022-04-21 08:18:16
 * @LastEditors: dx3906
 * @LastEditTime: 2022-04-26 16:22:37
 */
import { useEffect, useState } from "react";

function loadAllModeValues(modeName: string): Record<string, boolean> {
  const storedModeValues = localStorage.getItem(modeName);
  return storedModeValues != null ? JSON.parse(storedModeValues) : {};
}

export function useMode(
  modeName: string,
  dayString: string,
  defaultValue: boolean
): [boolean, (modeValue: boolean) => void] {
  const [modeValue, setModeValue] = useState<boolean>(defaultValue);

  useEffect(() => {
    setModeValue(loadAllModeValues(modeName)[dayString] ?? defaultValue);
  }, [dayString, defaultValue, modeName]);

  useEffect(() => {
    const allModeValues = loadAllModeValues(modeName);
    localStorage.setItem(
      modeName,
      JSON.stringify({
        ...allModeValues,
        [dayString]: modeValue,
      })
    );
  }, [dayString, modeName, modeValue]);

  return [modeValue, setModeValue];
}

export function isUsingMode(
  modeName: string,
  dayString: string
) {
  const storedModeValues = localStorage.getItem(modeName);
  const modeData = storedModeValues != null ? JSON.parse(storedModeValues) : {};
  return modeData[dayString];
}
/*
 * @Author: dx3906
 * @Date: 2022-04-26 17:47:52
 * @LastEditors: dx3906
 * @LastEditTime: 2022-04-29 11:24:19
 */
import { useCallback, useState } from "react";

export interface SettingsData {
  noImageMode: boolean;
  rotationMode: boolean;
  countyMode: boolean;
  distanceUnit: "km" | "miles";
  theme: "light" | "dark";
  shiftDayCount: number;
  allowShiftingDay: boolean;
}

const defaultSettingsData: SettingsData = {
  noImageMode: false,
  rotationMode: false,
  countyMode: false,
  distanceUnit: "km",
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  shiftDayCount: 0,
  allowShiftingDay: false,
};

function loadSettings(): SettingsData {
  const storedSettings = localStorage.getItem("settings");
  const settingsData = storedSettings != null ? JSON.parse(storedSettings) : {};
  return {
    ...defaultSettingsData,
    ...settingsData,
  };
}

export function getSettings(): SettingsData {
  const storedSettings = localStorage.getItem("settings");
  const settingsData = storedSettings != null ? JSON.parse(storedSettings) : {};
  return settingsData;
}

export function useSettings(): [
  SettingsData,
  (newSettings: Partial<SettingsData>) => void
] {
  const [settingsData, setSettingsData] = useState<SettingsData>(
    loadSettings()
  );

  const updateSettingsData = useCallback(
    (newSettings: Partial<SettingsData>) => {
      const updatedSettings = {
        ...settingsData,
        ...newSettings,
      };

      setSettingsData(updatedSettings);
      localStorage.setItem("settings", JSON.stringify(updatedSettings));
    },
    [settingsData]
  );

  return [settingsData, updateSettingsData];
}

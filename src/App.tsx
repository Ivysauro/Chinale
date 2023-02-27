import { ToastContainer, Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Game } from "./components/Game";
import React, { useEffect, useMemo, useState } from "react";
import { Infos } from "./components/panels/Infos";
import { useTranslation } from "react-i18next";
import { InfosFr } from "./components/panels/InfosFr";
import { InfosHu } from "./components/panels/InfosHu";
import { InfosZh } from "./components/panels/InfosZh";
import { Settings } from "./components/panels/Settings";
import { useSettings } from "./hooks/useSettings";
import { Worldle, Chinale } from "./components/Worldle";
import { Stats } from "./components/panels/Stats";
import { useReactPWAInstall } from "@teuteuf/react-pwa-install";
import { InstallButton } from "./components/InstallButton";
import { Twemoji } from "react-emoji-render";
import { getDayString, useTodays } from "./hooks/useTodays";
import {
  LocalStoragePersistenceService,
  ServiceWorkerUpdaterProps,
  withServiceWorkerUpdater,
} from "@3m1/service-worker-updater";

const supportLink: Record<string, string> = {
  UA: "https://donate.redcrossredcrescent.org/ua/donate/~my-donation?_cv=1",
};

function App({
  newServiceWorkerDetected,
  onLoadNewServiceWorkerAccept,
}: ServiceWorkerUpdaterProps) {
  const { t, i18n } = useTranslation();

  const dayString = useMemo(getDayString, []);
  const [{ country }] = useTodays(dayString);

  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  const [infoOpen, setInfoOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);

  const [settingsData, updateSettings] = useSettings();

  useEffect(() => {
    if (newServiceWorkerDetected) {
      toast.info(
        <div dangerouslySetInnerHTML={{ __html: t("newVersion") }} />,
        {
          autoClose: false,
          onClose: () => onLoadNewServiceWorkerAccept(),
        }
      );
    }
  }, [newServiceWorkerDetected, onLoadNewServiceWorkerAccept, t]);

  useEffect(() => {
    if (settingsData.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settingsData.theme]);

  let InfosComponent;
  switch (i18n.resolvedLanguage) {
    case "zh":
      InfosComponent = InfosZh;
      break;
    default:
      InfosComponent = InfosZh;
  }

  return (
    <>
      <ToastContainer
        hideProgressBar
        position="top-center"
        transition={Flip}
        theme={settingsData.theme}
        autoClose={2000}
        bodyClassName="font-bold text-center"
      />
      <InfosComponent
        isOpen={infoOpen}
        close={() => setInfoOpen(false)}
        settingsData={settingsData}
      />
      <Settings
        isOpen={settingsOpen}
        close={() => setSettingsOpen(false)}
        settingsData={settingsData}
        updateSettings={updateSettings}
      />
      <Stats
        isOpen={statsOpen}
        close={() => setStatsOpen(false)}
        distanceUnit={settingsData.distanceUnit}
      />
      <div className="flex justify-center flex-auto dark:bg-slate-900 dark:text-slate-50">
        <div className="w-full max-w-lg flex flex-col">
          <header className="border-b-2 px-3 border-gray-200 flex">
            <button
              className="mr-3 text-xl"
              type="button"
              onClick={() => setInfoOpen(true)}
            >
              <Twemoji text="❓" />
            </button>
            {supported() && !isInstalled() && (
              <InstallButton pwaInstall={pwaInstall} />
            )}
            <h1 className="text-4xl font-bold uppercase tracking-wide text-center my-1 flex-auto">
              <span className="text-red-600">舆</span>鉴
            </h1>
            <button
              className="ml-3 text-xl"
              type="button"
              onClick={() => setStatsOpen(true)}
            >
              <Twemoji text="📈" />
            </button>
            <button
              className="ml-3 text-xl"
              type="button"
              onClick={() => setSettingsOpen(true)}
            >
              <Twemoji text="⚙️" />
            </button>
          </header>
          <Game settingsData={settingsData} updateSettings={updateSettings} />
          <footer className="flex justify-center items-center text-sm mt-8 mb-1">
            <Chinale />&nbsp;MADE BY 欧琳的吟颂
          </footer>
        </div>
      </div>
    </>
  );
}

export default withServiceWorkerUpdater(App, {
  persistenceService: new LocalStoragePersistenceService("worldle"),
});

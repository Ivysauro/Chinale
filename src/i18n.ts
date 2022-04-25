import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  zh: {
    translation: {
      placeholder: "输入一个区划名称……",
      guess: "猜！",
      share: "分享成绩",
      showOnGoogleMaps: "👀 在地图上查看",
      showOnWikipedia: "📚 在百科上查看",
      welldone: "漂亮！",
      unknownCountry: "未知的区划名称！",
      copy: "成绩已复制到剪贴板",
      showCountry: "🗺️ 显示地图！",
      cancelRotation: "🌀 取消旋转",
      settings: {
        title: "设置",
        distanceUnit: "单位",
        theme: "主题",
        difficultyModifiers: "难度设置",
        startingNextDay: "会从明天起生效！",
        countyMode: "猜测县级单位而非地级单位",
        noImageMode: "隐藏地图",
        rotationMode: "随机旋转地图",
      },
      stats: {
        title: "数据",
        played: "游玩次数",
        win: "胜率 %",
        currentStreak: "当前连胜",
        maxStreak: "最大连胜",
        averageBestDistance: "平均最佳距离",
        guessDistribution: "尝试次数分布",
      },
      install: {
        title: "舆鉴",
        descritpionTitle: "安装APP：",
        description: "将志舆添加到主界面，更方便游玩",
        instructionTitle: "Instructions:",
        instructionActionOk: "OK",
        instructionActionCancel: "Cancel",
        instructionActionInstall: "Install",
        instructionFirefoxAction1: "- open browser options ",
        instructionFirefoxAction2: "- add to Home Screen",
        instructionFirefoxNewAction1: "- open browser options ",
        instructionFirefoxNewAction2: '- select "Install"',
        instructionIdeviceAction1: "- on Safari, open the Share menu ",
        instructionIdeviceAction2: '- select "Add to Home Screen"',
        instructionOperaAction1: "- press the menu button ",
        instructionOperaAction2: "- add to Home Screen",
        instructionNotSupported: "Not supported by this browser.",
      },
      support: {
        UA: "不了，谢谢",
      },
      newVersion: "新版本可用！ <br/> 点击以升级！",
      buyMeACoffee: "Buy him a ☕!",
    },
  },
  en: {
    translation: {
      placeholder: "Country, territory...",
      guess: "Guess",
      share: "Share",
      showOnGoogleMaps: "👀 on Google Maps",
      showOnWikipedia: "📚 on Wikipedia",
      welldone: "Well done!",
      unknownCountry: "Unknown country!",
      copy: "Copied results to clipboard",
      showCountry: "🗺️ Show map!",
      cancelRotation: "🌀 Cancel rotation",
      settings: {
        title: "Settings",
        distanceUnit: "Unit of distance",
        theme: "Theme",
        difficultyModifiers: "Difficulty modifiers",
        startingNextDay: "Starting the next day!",
        noImageMode: "Hide country image for more of a challenge.",
        rotationMode: "Randomly rotate country image.",
      },
      stats: {
        title: "Statistics",
        played: "Played",
        win: "Win %",
        currentStreak: "Current Streak",
        maxStreak: "Max Streak",
        averageBestDistance: "Best Distances Average",
        guessDistribution: "Guess distribution:",
      },
      install: {
        title: "Worldle",
        descritpionTitle: "App Install:",
        description: "Add Worldle to Home Screen to play it easily!",
        instructionTitle: "Instructions:",
        instructionActionOk: "OK",
        instructionActionCancel: "Cancel",
        instructionActionInstall: "Install",
        instructionFirefoxAction1: "- open browser options ",
        instructionFirefoxAction2: "- add to Home Screen",
        instructionFirefoxNewAction1: "- open browser options ",
        instructionFirefoxNewAction2: '- select "Install"',
        instructionIdeviceAction1: "- on Safari, open the Share menu ",
        instructionIdeviceAction2: '- select "Add to Home Screen"',
        instructionOperaAction1: "- press the menu button ",
        instructionOperaAction2: "- add to Home Screen",
        instructionNotSupported: "Not supported by this browser.",
      },
      support: {
        UA: "Support the Ukrainian Red Cross",
      },
      newVersion: "New version available! <br/> Click here to update!",
      buyMeACoffee: "Buy me a ☕!",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
  });

export default i18n;

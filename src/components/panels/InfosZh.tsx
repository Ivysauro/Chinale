/*
 * @Author: dx3906
 * @Date: 2022-04-22 15:40:35
 * @LastEditors: dx3906
 * @LastEditTime: 2022-04-25 11:25:48
 */
import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle, Chinale } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { Twemoji } from "@teuteuf/react-emoji-render";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function InfosZh({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="玩法说明" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>在 6 次尝试以内猜出给定的地点，它是一个随机的地级或县级行政区。</div>
        <div>每次猜测都需要是一个有效的行政区名称。</div>
        <div>
          每次尝试后，你可以看到本次尝试与给定地点之行政中心的距离、相对方位和接近程度。
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">例子：</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "广州市",
                direction: "W",
                distance: 1012000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            猜测的<span className="uppercase font-bold">广州市</span>
            与给定地点行政中心的距离是
            {formatDistance(1012000, settingsData.distanceUnit)}
            ，给定地点在它的正西方向。距离较远，因此接近程度只有49%。
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "文山壮族苗族自治州",
                direction: "W",
                distance: 88000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            第二次猜测的是<span className="uppercase font-bold">文山壮族苗族自治州</span>
            ，这下就近多了！相距
            {formatDistance(88000, settingsData.distanceUnit)}
            ，正西方向，95%！
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "红河哈尼族彝族自治州",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            下一次尝试，
            <span className="uppercase font-bold">红河哈尼族彝族自治州</span>
            ，正是要猜的地点！恭喜！{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        <Chinale /> 挑战会在每天凌晨 0 点刷新。<br></br>你可以在设置中打开“猜测县级单位”，增加猜测的难度。
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">有疑问或是建议？</div>
        <div>
          请前往{" "}
          <a
            className="underline"
            href="https://placeholder.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chinale FAQ
          </a>{" "}
          !
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Chinale /> 是 <Worldle /> 的一个本地化版本，绝大多数工作由 <Worldle />
        的原作者完成，而 <Worldle /> 的灵感则来源于由{" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>{" "}
        开发的{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        。<br></br>
        很惭愧，只做了一点微小的工作。
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          <Chinale /> MADE BY{" "}
          <a
            className="underline"
            href="https://www.zhihu.com/people/heliumjt"
            target="_blank"
            rel="noopener noreferrer"
          >
            @欧琳的吟颂
          </a>{" "}
          - (
          <a
            className="underline"
            href="https://github.com/heliumoctahelide/chinale-source/"
            target="_blank"
            rel="noopener noreferrer"
          >
            源代码
          </a>
          )
        </div>
        <div>
          <Worldle /> MADE BY{" "}
          <a
            className="underline"
            href="https://twitter.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @teuteuf
          </a>{" "}
          - (
          <a
            className="underline"
            href="https://github.com/teuteuf/worldle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            code source
          </a>
          )
        </div>
        <div>
          你可以给 <Worldle /> 的作者：{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="整杯咖啡！ ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}

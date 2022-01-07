import React, { useState } from "react";

import SettingsBtn from "components/ColorSettings/SettingsBtn";
import ColorsCard from "components/ColorSettings/ColorsCard";

import {
  MenuColorsI,
  BaseColorsI,
  NotificationColorsI,
  ColorGroupI,
  OnColorChangeType,
  PopupOptions,
} from "types";

interface ColorSettingsProps {
  menuColors: MenuColorsI;
  baseColors: BaseColorsI;
  notificationColors: NotificationColorsI;
  onColorChange: OnColorChangeType;
}

function ColorSettings({
  menuColors,
  baseColors,
  notificationColors,
  onColorChange,
}: ColorSettingsProps) {
  const [currentPopup, setCurrentPopup] = useState<number | null>(null);

  const onClose = setCurrentPopup.bind(null, null);

  const colorGroups: ColorGroupI[] = [
    {
      title: "ОСНОВНЫЕ ЦВЕТА",
      items: [
        {
          colors: Object.values(menuColors) as string[],
          title: "Оформление меню",
          description: "Настройте цвета меню",
          onClick: setCurrentPopup.bind(null, PopupOptions.MenuColors),
        },
        {
          colors: Object.values(baseColors) as string[],
          title: "Базовые элементы",
          description: "Цвета крупных элементов интерфейса",
          onClick: setCurrentPopup.bind(null, PopupOptions.BaseColors),
        },
      ],
    },
    {
      title: "ДОПОЛНИТЕЛЬНЫЕ ЦВЕТА",
      items: [
        {
          colors: Object.values(notificationColors) as string[],
          title: "Уведомления",
          description: "Цвета всплывающих подсказок",
          onClick: setCurrentPopup.bind(null, PopupOptions.NotificationColors),
        },
      ],
    },
  ];

  const menuColorGroup: ColorGroupI[] = [
    {
      items: [
        {
          colors: [menuColors.background],
          title: "Фон меню",
          description: "Цвет заливки основного фона",
        },
        {
          colors: [menuColors.sectionText],
          title: "Текст раздела",
          description: "Цвет текста разделов главного меню",
        },
        {
          colors: [menuColors.marker],
          title: "Маркер",
          description: "Цвет выбранного раздела меню",
        },
        {
          colors: [menuColors.sectionIcon],
          title: "Иконка раздела",
          description: "Цвет иконки в главном меню",
        },
      ],
    },
  ];

  switch (currentPopup) {
    case PopupOptions.ColorGroups:
      return (
        <ColorsCard
          {...{
            title: "Стили оформления",
            description: "Здесь вы можете настроить цвета сайта",
            colorGroups,
            onClose,
          }}
        />
      );
    case PopupOptions.MenuColors:
      return (
        <ColorsCard
          {...{
            title: "Цвета меню",
            colorGroups: menuColorGroup,
            onClose,
          }}
        />
      );
    case PopupOptions.BaseColors:
      return <div>Базовые элементы</div>;
    case PopupOptions.NotificationColors:
      return <div>Цвета уведомлений</div>;
    default:
      return (
        <SettingsBtn
          onClick={setCurrentPopup.bind(null, PopupOptions.ColorGroups)}
        />
      );
  }
}

export default ColorSettings;

import React from "react";

import { MenuColorsI, BaseColorsI, NotificationColorsI } from "types";

import { ReactComponent as CheckIcon } from "icons/check.svg";
import { ReactComponent as CrossIcon } from "icons/cross.svg";

import ColorItem from "components/ColorSettings/ColorsCard/ColorItem";

interface ColorsCardProps {
  menuColors: MenuColorsI;
  baseColors: BaseColorsI;
  notificationColors: NotificationColorsI;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

function ColorsCard({
  menuColors,
  baseColors,
  notificationColors,
  onClose,
}: ColorsCardProps) {
  return (
    <div className="colors-card">
      <div className="colors-card__header">
        <div className="title colors-card__title">Стили оформления</div>
        <div className="colors-card__icons">
          <div className="colors-card__icon">
            <CheckIcon />
          </div>
          <div className="colors-card__icon" onClick={onClose}>
            <CrossIcon />
          </div>
        </div>
      </div>
      <div className="text colors-card__description">
        Здесь вы можете настроить цвета сайта
      </div>
      <div className="colors-card__divider"></div>
      <div className="title colors-card__list-title">ОСНОВНЫЕ ЦВЕТА</div>
      <ColorItem
        {...{
          colors: Object.values(menuColors) as string[],
          title: "Оформление меню",
          description: "Настройте цвета меню",
        }}
      />
      <ColorItem
        {...{
          colors: Object.values(baseColors) as string[],
          title: "Базовые элементы",
          description: "Цвета крупных элементов интерфейса",
        }}
      />
      <div className="colors-card__divider"></div>
      <div className="title colors-card__list-title">ДОПОЛНИТЕЛЬНЫЕ ЦВЕТА</div>
      <ColorItem
        {...{
          colors: Object.values(notificationColors) as string[],
          title: "Уведомления",
          description: "Цвета всплывающих полсказок",
        }}
      />
    </div>
  );
}

export default ColorsCard;

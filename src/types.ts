export interface MenuColorsI {
  background: string;
  sectionText: string;
  marker: string;
  sectionIcon: string;
}

export interface BaseColorsI {
  titleAndText: string;
  tags: string;
  icons: string;
  workspace: string;
}

export interface NotificationColorsI {
  success: string;
  danger: string;
  warning: string;
  info: string;
}

export interface ColorGroupI {
  title?: string;
  items: {
    colors: string[];
    title: string;
    description: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
  }[];
}

export type OnColorChangeType = (
  menuColors: MenuColorsI,
  baseColors: BaseColorsI,
  notificationColors: NotificationColorsI
) => void;

export enum PopupOptions {
  ColorGroups,
  MenuColors,
  BaseColors,
  NotificationColors,
}

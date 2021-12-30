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

export type OnColorChangeType = (
  menuColors: MenuColorsI,
  baseColors: BaseColorsI,
  notificationColors: NotificationColorsI
) => void;

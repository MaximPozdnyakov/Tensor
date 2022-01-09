export interface ColorDataI {
  label: string;
  title: string;
  description: string;
}

export interface ColorsGroupI {
  title: string;
  subtitle: string;
  description: string;
  colors: ColorDataI[];
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface ColorsGroupsI {
  title: string;
  colorsGroups: ColorsGroupI[];
}

export interface ColorsI {
  [key: string]: string;
}

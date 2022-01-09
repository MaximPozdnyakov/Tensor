import React, { useState } from "react";

import { ColorsGroupsI, ColorsI, ColorsGroupI } from "types/colors";

import CardHeader from "components/ColorsCard/CardHeader";
import CardBody from "components/ColorsCard/CardBody";

export interface ColorsCardProps {
  title: string;
  description?: string;
  colors: ColorsI;
  colorsData: ColorsGroupsI[] | ColorsGroupI;
  onConfirm: React.MouseEventHandler<HTMLDivElement>;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  onBackClick?: React.MouseEventHandler<HTMLDivElement>;
  setColors: React.Dispatch<React.SetStateAction<ColorsI>>;
}

function ColorsCard({
  title,
  description,
  colors,
  colorsData,
  onConfirm,
  onClose,
  onBackClick,
  setColors,
}: ColorsCardProps) {
  const [nextModalProps, setNextModalProps] = useState<ColorsCardProps | null>(
    null
  );

  if (nextModalProps) {
    return <ColorsCard {...{ ...nextModalProps, colors }} />;
  }
  return (
    <div className="colors-card">
      <CardHeader
        {...{ title, description, onConfirm, onClose, onBackClick }}
      />
      <CardBody
        {...{
          colors,
          colorsData,
          setNextModalProps,
          onConfirm,
          onClose,
          setColors,
        }}
      />
    </div>
  );
}

export default ColorsCard;

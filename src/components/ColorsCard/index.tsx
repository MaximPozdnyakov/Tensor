import React, { useState } from "react";

import { ColorsGroupsI, ColorsI, ColorsGroupI } from "types/colors";

import CardHeader from "components/ColorsCard/CardHeader";
import CardBody from "components/ColorsCard/CardBody";

export interface ColorsCardProps {
  title: string;
  description?: string;
  colors: ColorsI;
  colorsData: ColorsGroupsI[] | ColorsGroupI;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  onBackClick?: React.MouseEventHandler<HTMLDivElement>;
}

function ColorsCard({
  title,
  description,
  colors,
  colorsData,
  onClose,
  onBackClick,
}: ColorsCardProps) {
  const [nextModalProps, setNextModalProps] = useState<ColorsCardProps | null>(
    null
  );

  if (nextModalProps) {
    return <ColorsCard {...nextModalProps} />;
  }
  return (
    <div className="colors-card">
      <CardHeader {...{ title, description, onClose, onBackClick }} />
      <CardBody {...{ colors, colorsData, setNextModalProps, onClose }} />
    </div>
  );
}

export default ColorsCard;

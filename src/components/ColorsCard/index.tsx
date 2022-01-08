import React from "react";

import { ColorGroupI } from "types";

import CardHeader from "components/ColorsCard/CardHeader";
import CardBody from "components/ColorsCard/CardBody";

interface ColorsCardProps {
  title: string;
  description?: string;
  colorGroups: ColorGroupI[];
  onClose: React.MouseEventHandler<HTMLDivElement>;
  onBackClick?: React.MouseEventHandler<HTMLDivElement>;
}

function ColorsCard({
  title,
  description,
  colorGroups,
  onClose,
  onBackClick,
}: ColorsCardProps) {
  return (
    <div className="colors-card">
      <CardHeader {...{ title, onClose, onBackClick }} />
      <CardBody {...{ description, colorGroups }} />
    </div>
  );
}

export default ColorsCard;
import React from "react";

import { ColorGroupI } from "types";

import CardHeader from "components/ColorSettings/ColorsCard/CardHeader";
import CardBody from "components/ColorSettings/ColorsCard/CardBody";

interface ColorsCardProps {
  title: string;
  description?: string;
  colorGroups: ColorGroupI[];
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

function ColorsCard({
  title,
  description,
  colorGroups,
  onClose,
}: ColorsCardProps) {
  return (
    <div className="colors-card">
      <CardHeader {...{ title, onClose }} />
      <CardBody {...{ description, colorGroups }} />
    </div>
  );
}

export default ColorsCard;

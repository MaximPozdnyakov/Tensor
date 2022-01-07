import React from "react";

import { ReactComponent as CheckIcon } from "icons/check.svg";
import { ReactComponent as CrossIcon } from "icons/cross.svg";

interface CardHeaderProps {
  title: string;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

function CardHeader({ title, onClose }: CardHeaderProps) {
  return (
    <div className="colors-card__header">
      <div className="title">{title}</div>
      <div className="colors-card__icons">
        <div className="colors-card__icon">
          <CheckIcon />
        </div>
        <div className="colors-card__icon" onClick={onClose}>
          <CrossIcon />
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
